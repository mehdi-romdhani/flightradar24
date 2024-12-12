/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Airline } from '../models/Airline';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AirlinesLightService {
    /**
     * Get basic airline information by ICAO code
     * Returns airline name, ICAO, and IATA codes.
     * @param icao Airline ICAO code.
     * @param acceptVersion Specifies the FR24 API version. The currently available version is `v1`.
     * @returns Airline Success
     * @throws ApiError
     */
    public static getAirlinesLight(
        icao: string,
        acceptVersion: string = 'v1',
    ): CancelablePromise<Airline> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/static/airlines/{icao}/light',
            path: {
                'icao': icao,
            },
            headers: {
                'Accept-Version': acceptVersion,
            },
            errors: {
                400: `Validation error`,
                401: `Unauthorized`,
                402: `Payment Required`,
                404: `Not found`,
            },
        });
    }
}
