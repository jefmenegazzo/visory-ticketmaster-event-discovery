/**
 * Base parameters for all requests with params.
 */
export interface BaseParamsDto {
    /**
     * The locale in ISO code format. Multiple comma-separated values can be provided.
     * When omitting the country part of the code (e.g., only 'en' or 'fr'), then the first matching locale is used.
     * When using a '*', it matches all locales. '*' can only be used at the end (e.g., 'en-us,en,*').
     */
    locale?: string;

    /**
     * Filter entities based on domains they are available on.
     */
    domain?: string[];
}
