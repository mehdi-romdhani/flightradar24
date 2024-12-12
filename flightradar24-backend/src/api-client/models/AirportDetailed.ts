/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Country } from './Country';
import type { Timezone } from './Timezone';
/**
 * Contains detailed airport information.
 */
export type AirportDetailed = {
    /**
     * Name of the airport.
     */
    name?: string;
    /**
     * Airport IATA code.
     */
    iata?: string | null;
    /**
     * Airport ICAO code.
     */
    icao?: string | null;
    /**
     * Longitude expressed in decimal degrees.
     */
    lon?: number;
    /**
     * Latitude expressed in decimal degrees.
     */
    lat?: number;
    /**
     * Airport elevation in feet.
     */
    elevation?: number;
    country?: Country;
    /**
     * City of airport.
     */
    city?: string;
    /**
     * The state where the airport is located. Only available for US, Canada, Brazil and Australia.
     */
    state?: string | null;
    timezone?: Timezone;
};

