/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Flight = {
    /**
     * Unique identifier assigned by Flightradar24 to each flight leg.
     */
    fr24_id?: string;
    /**
     * Commercial flight number.
     */
    flight?: string | null;
    /**
     * Callsign used by Air Traffic Control to denote a specific flight (as sent by aircraft transponder).
     */
    callsign?: string | null;
    /**
     * Latest latitude expressed in decimal degrees.
     */
    lat?: number;
    /**
     * Latest longitude expressed in decimal degrees.
     */
    lon?: number;
    /**
     * True track (over ground) expressed in integer degrees as 0-360. Please note that 0 can in some cases mean unknown.
     */
    track?: number;
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
     * 4 digit unique identifying code for ATC expressed in octal format.
     */
    squawk?: string;
    /**
     * Timestamp of the flight position expressed in UTC (ISO 8601 date format).
     */
    timestamp?: string;
    /**
     * Data source of the provided flight position.
     */
    source?: string;
    /**
     * 24 bit Mode-S identifier expressed in hexadecimal format.
     */
    hex?: string | null;
    /**
     * Aircraft ICAO type code.
     */
    type?: string | null;
    /**
     * Aircraft registration as matched from Mode-S identifier.
     */
    reg?: string | null;
    /**
     * ICAO code of the carrier mapped from FR24's internal database.
     */
    painted_as?: string | null;
    /**
     * ICAO code of the airline carrier as derived from flight callsign.
     */
    operating_as?: string | null;
    /**
     * Origin airport IATA code.
     */
    orig_iata?: string | null;
    /**
     * Origin airport ICAO code.
     */
    orig_icao?: string | null;
    /**
     * Destination airport IATA code.
     */
    dest_iata?: string | null;
    /**
     * Destination airport ICAO code.
     */
    dest_icao?: string | null;
    /**
     * Estimated time of arrival (ISO 8601 date format).
     */
    eta?: string | null;
};

