import { BaseParamsDto } from "./base-params.dto";

export type SourceEnum = 'ticketmaster' | 'universe' | 'frontgate' | 'tmr';
export type IncludeTestEnum = 'yes' | 'no' | 'only';
export type SortOrder = 'name,asc' | 'name,desc';
export type PreferredCountryEnum = 'us' | 'ca';
export type IncludeSpellcheckEnum = 'yes' | 'no';

/**
 * DTO for classification search.
 */
export interface ClassificationSearchParamsDTO extends BaseParamsDto {
    /**
     * Filter entities by its id.
     */
    id?: string;

    /**
     * Keyword to search on.
     */
    keyword?: string;

    /**
     * Filter entities by its primary source name OR publishing source name.
     */
    source?: SourceEnum;

    /**
     * Yes if you want to have entities flag as test in the response. Only, if you only wanted test entities.
     * Default value is 'no'.
     */
    includeTest?: IncludeTestEnum;

    /**
     * Page size of the response. Default value is 20.
     */
    size?: string;

    /**
     * Page number. Default value is 0.
     */
    page?: string;

    /**
     * Sorting order of the search result. Default value is 'name,asc'.
     */
    sort?: SortOrder;

    /**
     * Popularity boost by country, default is 'us'.
     */
    preferredCountry?: PreferredCountryEnum;

    /**
     * Yes, to include spell check suggestions in the response. Default value is 'no'.
     */
    includeSpellcheck?: IncludeSpellcheckEnum;
}
