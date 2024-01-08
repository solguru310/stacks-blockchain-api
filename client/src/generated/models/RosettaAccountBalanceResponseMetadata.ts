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
/**
 * Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address.
 * @export
 * @interface RosettaAccountBalanceResponseMetadata
 */
export interface RosettaAccountBalanceResponseMetadata {
    /**
     * 
     * @type {number}
     * @memberof RosettaAccountBalanceResponseMetadata
     */
    sequence_number: number;
}

export function RosettaAccountBalanceResponseMetadataFromJSON(json: any): RosettaAccountBalanceResponseMetadata {
    return RosettaAccountBalanceResponseMetadataFromJSONTyped(json, false);
}

export function RosettaAccountBalanceResponseMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaAccountBalanceResponseMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sequence_number': json['sequence_number'],
    };
}

export function RosettaAccountBalanceResponseMetadataToJSON(value?: RosettaAccountBalanceResponseMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sequence_number': value.sequence_number,
    };
}

