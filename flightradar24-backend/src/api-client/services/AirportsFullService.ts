/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirportDetailed } from '../models/AirportDetailed';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AirportsFullService {
    /**
     * Get detailed airport information by code
     * Returns details of the requested airport including its name, codes, location, elevation, and timezone information.
     * @param code Airports IATA or ICAO code.
     * @param acceptVersion Specifies the FR24 API version. The currently available version is `v1`.
     * @returns AirportDetailed Success
     * @throws ApiError
     */
    public static getAirportsFull(
        code: string,
        acceptVersion: string = 'v1',
    ): CancelablePromise<AirportDetailed> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/static/airports/{code}/full',
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
