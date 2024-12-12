/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsageLogSummary } from '../models/UsageLogSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsageService {
    /**
     * Get info on API account usage
     * @param acceptVersion Specifies the FR24 API version. The currently available version is `v1`.
     * @param period
     * @returns any Success
     * @throws ApiError
     */
    public static getApiUsage(
        acceptVersion: string = 'v1',
        period: '24h' | '7d' | '30d' | '1y' = '24h',
    ): CancelablePromise<{
        data?: Array<UsageLogSummary>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/usage',
            headers: {
                'Accept-Version': acceptVersion,
            },
            query: {
                'period': period,
            },
            errors: {
                400: `Validation error`,
                401: `Unauthorized`,
            },
        });
    }
}
