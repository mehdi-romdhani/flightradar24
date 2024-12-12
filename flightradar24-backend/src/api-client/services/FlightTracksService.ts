/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlightTracks } from '../models/FlightTracks';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FlightTracksService {
    /**
     * Get positional tracks for a specific flight
     * Returns a flight with positional tracks for both live and historical flights based on the FR24 flight ID. Availability of historical data depends on the user's subscription plan, with a maximum limit of up to 3 years.
     * @param acceptVersion Specifies the FR24 API version. The currently available version is `v1`.
     * @param flightId Flightradar24 id of active flight in hexadecimal
     * @returns FlightTracks Success
     * @throws ApiError
     */
    public static getFlightsTracks(
        acceptVersion: string = 'v1',
        flightId?: string,
    ): CancelablePromise<FlightTracks> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/flight-tracks',
            headers: {
                'Accept-Version': acceptVersion,
            },
            query: {
                'flight_id': flightId,
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
