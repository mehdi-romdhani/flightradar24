/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Airport } from '../models/Airport';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AirportsLightService {
    /**
     * Get basic airline information by code
     * Returns the airport name, ICAO and IATA codes.
     * @param code Airports IATA or ICAO code.
     * @param acceptVersion Specifies the FR24 API version. The currently available version is `v1`.
     * @returns Airport Success
     * @throws ApiError
     */
    public static getAirportsLight(
        code: string,
        acceptVersion: string = 'v1',
    ): CancelablePromise<Airport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/static/airports/{code}/light',
            path: {
                'code': code,
            },
            headers: {
                'Accept-Version': acceptVersion,
            },
            errors: {
                400: `Validation error`,
                401: `Unauthorized`,
                402: `Payment Required`,
                404: `Validation error`,
            },
        });
    }
}
