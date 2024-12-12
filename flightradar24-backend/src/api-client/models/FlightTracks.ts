/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FlightTracks = {
    /**
     * Unique identifier assigned by Flightradar24 to the flight leg.
     */
    fr24_id?: string;
    tracks?: Array<{
        /**
         * Timestamp of the flight position expressed in UTC (ISO 8601 date format).
         */
        timestamp?: string;
        /**
         * Latest latitude expressed in decimal degrees.
         */
        lat?: number;
        /**
         * Latest longitude expressed in decimal degrees.
         */
        lon?: number;
        /**
         * Barometric pressure altitude above mean sea level (AMSL) reported at a standard atmospheric pressure (1013.25 hPa / 29.92 in. Hg.) expressed in feet.
         */
        alt?: number;
        /**
         * Speed relative to the ground expressed in knots.
         */
        gspeed?: number;
        /**
         * The rate at which the aircraft is ascending or descending in feet per minute.
         */
        vspeed?: number;
        /**
         * True track (over ground) expressed in integer degrees as 0-360. Please note that 0 can in some cases mean unknown.
         */
        track?: number;
        /**
         * 4 digit unique identifying code for ATC expressed in octal format.
         */
        squawk?: string;
        /**
         * The last known callsign used by Air Traffic Control to denote a specific flight, as sent by the aircraft transponder. This callsign is consistent across all reported positions.
         */
        callsign?: string | null;
        /**
         * Data source of the provided flight position.
         */
        source?: string;
    }>;
};

