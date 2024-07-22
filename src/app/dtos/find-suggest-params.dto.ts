import { BaseParamsDto } from "./base-params.dto";

type YesNoOnly = 'yes' | 'no' | 'only';
type RadiusUnit = 'miles' | 'km';
type Source = 'ticketmaster' | 'universe' | 'frontgate' | 'tmr';
type PreferredCountry = 'us' | 'ca';

/**
 * Parameters for finding suggestions.
 */
export interface FindSuggestParamsDto extends BaseParamsDto {

	/**
	 * Keyword to search on.
	 */
    keyword?: string;

    /**
     * Filter events by latitude and longitude. This filter is deprecated and may be removed in a future release,
     * please use geoPoint instead.
     */
    latlong?: string;

    /**
	 * Radius of the area in which we want to search for events. Default is '100'.
	 */
    radius?: string;

    /**
	 * Unit of the radius. Default is 'miles'.
	 */
    unit?: RadiusUnit;

    /**
	 * Filter entities by its primary source name OR publishing source name.
	 */
    source?: Source;

    /**
     * True, to include events with date to be announce (TBA).
     * Default is 'no' if date parameter sent, 'yes' otherwise.
     */
    includeTBA?: YesNoOnly;

    /**
     * True, to include event with a date to be defined (TBD).
     * Default is 'no' if date parameter sent, 'yes' otherwise.
     */
    includeTBD?: YesNoOnly;

    /**
     * Yes if you want to have entities flag as test in the response.
     * Only, if you only wanted test entities. Default is 'no'.
     */
    includeTest?: YesNoOnly;

    /** Size of every entity returned in the response. Default is '5'. */
    size?: string;

    /**
	 * Filter suggestions by country code.
	 */
    countryCode?: string;

    /**
	 * Filter suggestions by segment id.
	 */
    segmentId?: string[];

    /**
	 * Filter events by geoHash.
	 */
    geoPoint?: string;

    /**
     * Which resources to include in the suggest response, defaults to all resources.
     * Default is ['attractions', 'events', 'venues', 'products'].
     */
    resource?: string[];

    /**
	 * Popularity boost by country, default is 'us'.
	 */
    preferredCountry?: PreferredCountry;

    /**
	 * Filter event where event start and end date overlap this range.
	 */
    startEndDateTime?: string[];

    /**
	 * Filter event where event local start and end date overlap this range.
	 */
    localStartEndDateTime?: string[];

    /**
     * Yes, to include spell check suggestions in the response.
     * Default is 'no'.
     */
    includeSpellcheck?: YesNoOnly;
}
