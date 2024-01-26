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
 * 
 * @export
 * @interface InlineResponse403
 */
export interface InlineResponse403 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse403
     */
    error?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse403
     */
    success?: boolean;
}

export function InlineResponse403FromJSON(json: any): InlineResponse403 {
    return InlineResponse403FromJSONTyped(json, false);
}

export function InlineResponse403FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse403 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function InlineResponse403ToJSON(value?: InlineResponse403 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'success': value.success,
    };
}
