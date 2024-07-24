import { BaseParamsDto } from "./base-params.dto";

type YesNoOnly = 'yes' | 'no' | 'only';
type Unit = 'miles' | 'km';
type Source = 'ticketmaster' | 'universe' | 'frontgate' | 'tmr';
type SortOrder = 'name,asc' | 'name,desc' | 'relevance,asc' | 'relevance,desc' | 'distance,asc' | 'distance,desc' | 'random';
type PreferredCountry = 'us' | 'ca';

/**
 * Venue search parameters with detailed descriptions, types, and default values.
 */
export interface VenueSearchParamsDto extends BaseParamsDto {
	/**
	 * Filter entities by its id.
	 */
	id?: string;

	/**
	 * Keyword to search on.
	 */
	keyword?: string;

	/**
	 * Filter events by latitude and longitude. This filter is deprecated and may be removed in a future release, please use geoPoint instead.
	 */
	latlong?: string;

	/**
	 * Radius of the area in which we want to search for events.
	 */
	radius?: string;

	/**
	 * Unit of the radius. Default is 'miles'.
	 */
	unit?: Unit;

	/**
	 * Filter entities by its primary source name OR publishing source name.
	 */
	source?: Source;

	/**
	 * The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g., only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g., 'en-us,en,*'). Default is 'en'.
	 */
	locale?: string;

	/**
	 * Yes if you want to have entities flag as test in the response. Only, if you only wanted test entities. Default is 'no'.
	 */
	includeTest?: YesNoOnly;

	/**
	 * Page size of the response. Default is 20.
	 */
	size?: string;

	/**
	 * Page number. Default is 0.
	 */
	page?: string;

	/**
	 * Sorting order of the search result. Default is 'relevance,desc'.
	 */
	sort?: SortOrder;

	/**
	 * Filter venues by country code.
	 */
	countryCode?: string;

	/**
	 * Filter venues by state / province code.
	 */
	stateCode?: string;

	/**
	 * Filter events by geoHash.
	 */
	geoPoint?: string;

	/**
	 * Popularity boost by country, default is 'us'.
	 */
	preferredCountry?: PreferredCountry;

	/**
	 * Yes, to include spell check suggestions in the response. Default is 'no'.
	 */
	includeSpellcheck?: YesNoOnly;
}
