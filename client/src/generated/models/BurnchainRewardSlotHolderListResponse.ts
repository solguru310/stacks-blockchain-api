/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BurnchainRewardSlotHolder,
    BurnchainRewardSlotHolderFromJSON,
    BurnchainRewardSlotHolderFromJSONTyped,
    BurnchainRewardSlotHolderToJSON,
} from './';

/**
 * GET request that returns reward slot holders
 * @export
 * @interface BurnchainRewardSlotHolderListResponse
 */
export interface BurnchainRewardSlotHolderListResponse {
    /**
     * The number of items to return
     * @type {number}
     * @memberof BurnchainRewardSlotHolderListResponse
     */
    limit: number;
    /**
     * The number of items to skip (starting at `0`)
     * @type {number}
     * @memberof BurnchainRewardSlotHolderListResponse
     */
    offset: number;
    /**
     * Total number of available items
     * @type {number}
     * @memberof BurnchainRewardSlotHolderListResponse
     */
    total: number;
    /**
     * 
     * @type {Array<BurnchainRewardSlotHolder>}
     * @memberof BurnchainRewardSlotHolderListResponse
     */
    results: Array<BurnchainRewardSlotHolder>;
}

export function BurnchainRewardSlotHolderListResponseFromJSON(json: any): BurnchainRewardSlotHolderListResponse {
    return BurnchainRewardSlotHolderListResponseFromJSONTyped(json, false);
}

export function BurnchainRewardSlotHolderListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BurnchainRewardSlotHolderListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'offset': json['offset'],
        'total': json['total'],
        'results': ((json['results'] as Array<any>).map(BurnchainRewardSlotHolderFromJSON)),
    };
}

export function BurnchainRewardSlotHolderListResponseToJSON(value?: BurnchainRewardSlotHolderListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'offset': value.offset,
        'total': value.total,
        'results': ((value.results as Array<any>).map(BurnchainRewardSlotHolderToJSON)),
    };
}
