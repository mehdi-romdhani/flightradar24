/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Flight } from '../models/Flight';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HistoricFlightPositionsFullService {
    /**
     * Get historical flight positions
     * Returns comprehensive historical information on aircraft flight movements, including flight and aircraft details such as origin, destination, and aircraft type for up to three years. At least one query parameter and a history snapshot timestamp are required to retrieve data.
     * @param timestamp Unix timestamp representing the exact point in time for which you want to fetch flight positions. The timestamp must be within the past 3 years, subject to your subscription plan's limitations. Only one timestamp value is accepted; time ranges are not supported
     * @param acceptVersion Specifies the FR24 API version. The currently available version is `v1`.
     * @param bounds Coordinates defining an area. Order: north, south, west, east (comma-separated float values). Up to 3 decimal points will be processed.
     * @param flights Flight numbers (comma-separated values).
     * @param callsigns Flight callsigns (comma-separated values).
     * @param registrations Aircraft registration numbers (comma-separated values).
     * @param paintedAs Aircraft painted in an airline\'s livery, identified by ICAO code, but not necessarily operated by that airline, such as a regional airline operating a flight for a larger airline (comma-separated values).
     * @param operatingAs Aircraft operating under an airline\'s call sign, identified by ICAO code, but not necessarily an aircraft belonging to that airline, such as an aircraft on lease from another airline (comma-separated values).
     * @param airports Airports specified by IATA or ICAO codes or countries specified by ISO 3166-1 alpha-2 codes (comma-separated values)
     * To determine direction use format: &#60;direction&#62;:&#60;code&#62; (colon-separated)<br><br>
     * Available directions:
     * - both - both directions (default direction when not specified)
     * - inbound - flights to airport
     * - outbound - flight from airport
     *
     * @param routes Flights between different airports or countries. Airports specified by IATA or ICAO codes or countries specified by ISO 3166-1 alpha-2 codes (comma-separated values).
     * @param aircraft Aircraft ICAO type codes (comma-separated values).
     * @param altitudeRanges Flight altitude ranges (comma-separated values). Unit: feet. Minimum value: 0.
     * @param squawks Squawk codes in hex format (comma-separated values).
     * @param categories Categories of Flights (comma-separated values).
     * Available values:
     * - <b>P</b> - PASSENGER - Commercial aircraft that carry passengers as their primary purpose
     * - <b>C</b> - CARGO - Aircraft that carry only cargo
     * - <b>M</b> - MILITARY_AND_GOVERNMENT - Aircraft operated by military or a governmental agency
     * - <b>J</b> - BUSINESS_JETS - Larger private aircraft, such as Gulfstream, Bombardier, and Pilatus
     * - <b>T</b> - GENERAL_AVIATION - Non-commercial transport flights, including private, ambulance, aerial survey, flight training and instrument calibration aircraft
     * - <b>H</b> - HELICOPTERS - Rotary wing aircraft
     * - <b>B</b> - LIGHTER_THAN_AIR - Lighter-than-air aircraft include gas-filled airships of all kinds
     * - <b>G</b> - GLIDERS - Unpowered aircraft
     * - <b>D</b> - DRONES - Uncrewed aircraft, ranging from small consumer drones to larger UAVs
     * - <b>V</b> - GROUND_VEHICLES - Transponder equipped vehicles, such as push-back tugs, fire trucks, and operations vehicles
     * - <b>O</b> - OTHER - Aircraft appearing on Flightradar24 not classified elsewhere (International Space Station, UFOs, Santa, etc)
     * - <b>N</b> - NON_CATEGORIZED - Aircraft not yet placed into a category in the Flightradar24 database
     *
     * @param dataSources Source of information about flights (comma-separated values).
     * Available values:
     * - ADSB
     * - MLAT
     * - ESTIMATED
     * - <i>Empty parameter will include all sources.</i>
     *
     * @param limit Limit of results. Max value 30000.
     * @returns any Success
     * @throws ApiError
     */
    public static getHistoricFlightPositionsFull(
        timestamp: number,
        acceptVersion: string = 'v1',
        bounds?: string,
        flights?: string,
        callsigns?: string,
        registrations?: string,
        paintedAs?: string,
        operatingAs?: string,
        airports?: string,
        routes?: string,
        aircraft?: string,
        altitudeRanges?: string,
        squawks?: string,
        categories?: string,
        dataSources?: string,
        limit?: number,
    ): CancelablePromise<{
        data?: Array<Flight>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/historic/flight-positions/full',
            headers: {
                'Accept-Version': acceptVersion,
            },
            query: {
                'timestamp': timestamp,
                'bounds': bounds,
                'flights': flights,
                'callsigns': callsigns,
                'registrations': registrations,
                'painted_as': paintedAs,
                'operating_as': operatingAs,
                'airports': airports,
                'routes': routes,
                'aircraft': aircraft,
                'altitude_ranges': altitudeRanges,
                'squawks': squawks,
                'categories': categories,
                'data_sources': dataSources,
                'limit': limit,
            },
            errors: {
                400: `Validation error`,
                401: `Unauthorized`,
                402: `Payment Required`,
            },
        });
    }
}
