import { c32address } from 'c32check';
import { PostConditionMode } from '../../../.tmp/index';
import {
  PostCondition,
  PostConditionFungible,
  PostConditionNonFungible,
  PostConditionPrincipal,
  PostConditionFungibleConditionCode,
  PostConditionNonFungibleConditionCode,
  PostConditionPrincipalType,
} from '@entities';

import {
  TransactionPostCondition,
  AssetInfoTypeID,
  PostConditionPrincipal as TxPostConditionPrincipal,
  PostConditionPrincipalTypeID,
  AssetInfo,
  FungibleConditionCode,
  NonfungibleConditionCode,
} from '../../p2p/tx';

const assetPrincipalTypeMap = {
  [PostConditionPrincipalTypeID.Origin]: 'principal_origin',
  [PostConditionPrincipalTypeID.Standard]: 'principal_standard',
  [PostConditionPrincipalTypeID.Contract]: 'principal_contract',
} as const;

export function serializeAssetPrincipalType(
  type: PostConditionPrincipalTypeID
): PostConditionPrincipalType {
  return assetPrincipalTypeMap[type];
}

export function serializePostConditionPrincipal(
  principal: TxPostConditionPrincipal
): PostConditionPrincipal {
  if (principal.typeId === PostConditionPrincipalTypeID.Standard) {
    return {
      ...principal,
      type_id: assetPrincipalTypeMap[principal.typeId],
      address: c32address(principal.address.version, principal.address.bytes.toString('hex')),
    };
  }
  if (principal.typeId === PostConditionPrincipalTypeID.Contract) {
    return {
      ...principal,
      type_id: assetPrincipalTypeMap[principal.typeId],
      contract_name: principal.contractName,
      address: c32address(principal.address.version, principal.address.bytes.toString('hex')),
    };
  }
  return {
    ...principal,
    type_id: assetPrincipalTypeMap[principal.typeId],
  };
}

type SerializedPostConditionAsset =
  | PostConditionFungible['asset']
  | PostConditionNonFungible['asset'];

export function serializePostConditionAsset(asset: AssetInfo): SerializedPostConditionAsset {
  return {
    ...asset,
    contract_name: asset.contractName,
    asset_name: asset.assetName,
    contract_address: c32address(
      asset.contractAddress.version,
      asset.contractAddress.bytes.toString('hex')
    ),
  };
}

const assetInfoTypeMap = {
  [AssetInfoTypeID.STX]: 'stx',
  [AssetInfoTypeID.FungibleAsset]: 'fungible',
  [AssetInfoTypeID.NonfungibleAsset]: 'non_fungible',
} as const;

export function serializePostConditionType(type: AssetInfoTypeID) {
  return assetInfoTypeMap[type];
}

export function serializePostCondition(pc: TransactionPostCondition): PostCondition {
  switch (pc.assetInfoId) {
    case AssetInfoTypeID.STX:
      return {
        ...pc,
        type: assetInfoTypeMap[pc.assetInfoId],
        condition_code: serializeFungibleConditionCode(pc.conditionCode),
        amount: pc.amount.toString(),
        principal: serializePostConditionPrincipal(pc.principal),
      };
    case AssetInfoTypeID.FungibleAsset:
      return {
        ...pc,
        type: assetInfoTypeMap[pc.assetInfoId],
        condition_code: serializeFungibleConditionCode(pc.conditionCode),
        amount: pc.amount.toString(),
        principal: serializePostConditionPrincipal(pc.principal),
        asset: serializePostConditionAsset(pc.asset),
      };
    case AssetInfoTypeID.NonfungibleAsset:
      return {
        ...pc,
        type: assetInfoTypeMap[pc.assetInfoId],
        condition_code: serializeNonFungibleConditionCode(pc.conditionCode),
        principal: serializePostConditionPrincipal(pc.principal),
        asset_value: pc.assetValue.type.toString(),
        asset: serializePostConditionAsset(pc.asset),
      };
  }
}

const fungibleConditionCodeMap = {
  [FungibleConditionCode.SentEq]: 'sent_equal_to',
  [FungibleConditionCode.SentGe]: 'sent_greater_than',
  [FungibleConditionCode.SentGt]: 'sent_greater_than_or_equal_to',
  [FungibleConditionCode.SentLe]: 'sent_less_than',
  [FungibleConditionCode.SentLt]: 'sent_less_than_or_equal_to',
} as const;

export function serializeFungibleConditionCode(
  code: FungibleConditionCode
): PostConditionFungibleConditionCode {
  return fungibleConditionCodeMap[code];
}

const fungibleNonConditionCodeMap = {
  [NonfungibleConditionCode.NotSent]: 'not_sent',
  [NonfungibleConditionCode.Sent]: 'sent',
} as const;

export function serializeNonFungibleConditionCode(
  code: NonfungibleConditionCode
): PostConditionNonFungibleConditionCode {
  return fungibleNonConditionCodeMap[code];
}

export function serializePostConditionMode(byte: number): PostConditionMode {
  if (byte === 1) {
    return 'allow';
  }
  if (byte === 2) {
    return 'deny';
  }
  throw new Error(`PostConditionMode byte must be either 1 or 2 but was ${byte}`);
}
