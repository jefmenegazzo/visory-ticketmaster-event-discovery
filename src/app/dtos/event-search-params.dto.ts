import { BaseParamsDto } from "./base-params.dto";

type Unit = 'miles' | 'km';
type Source = 'ticketmaster' | 'universe' | 'frontgate' | 'tmr';
type IncludeOption = 'yes' | 'no' | 'only';
type SortOption = 'name,asc' | 'name,desc' | 'date,asc' | 'date,desc' | 'relevance,asc' | 'relevance,desc' | 'distance,asc' | 'name,date,asc' | 'name,date,desc' | 'date,name,asc' | 'date,name,desc' | 'distance,date,asc' | 'onSaleStartDate,asc' | 'id,asc' | 'venueName,asc' | 'venueName,desc' | 'random';
type PreferredCountry = 'us' | 'ca';
type IncludeSpellcheck = 'yes' | 'no';
type IncludeFamily = 'yes' | 'no' | 'only';

/**
 * Event search parameters with detailed descriptions and default values.
 */
export interface EventSearchParamsDTO extends BaseParamsDto {
	/**
	 * Filter entities by its id
	 */
	id?: string;

	/**
	 * Keyword to search on
	 */
	keyword?: string;

	/**
	 * Filter by attraction id
	 */
	attractionId?: string;

	/**
	 * Filter by venue id
	 */
	venueId?: string;

	/**
	 * Filter by postal code / zipcode
	 */
	postalCode?: string;

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
	 * Filter entities by its primary source name OR publishing source name
	 */
	source?: Source;

	/**
	 * Filter by market id
	 */
	marketId?: string;

	/**
	 * Filter with a start date after this date
	 */
	startDateTime?: string;

	/**
	 * Filter with a start date before this date
	 */
	endDateTime?: string;

	/**
	 * Yes, to include with date to be announce (TBA). Default is 'no' if date parameter sent, 'yes' otherwise.
	 */
	includeTBA?: IncludeOption;

	/**
	 * Yes, to include with a date to be defined (TBD). Default is 'no' if date parameter sent, 'yes' otherwise.
	 */
	includeTBD?: IncludeOption;

	/**
	 * Yes if you want to have entities flag as test in the response. Only, if you only wanted test entities. Default is 'no'.
	 */
	includeTest?: IncludeOption;

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
	sort?: SortOption;

	/**
	 * Filter with onsale start date after this date
	 */
	onsaleStartDateTime?: string;

	/**
	 * Filter with onsale end date before this date
	 */
	onsaleEndDateTime?: string;

	/**
	 * Filter by city
	 */
	city?: string[];

	/**
	 * Filter by country code
	 */
	countryCode?: string;

	/**
	 * Filter by state code
	 */
	stateCode?: string;

	/**
	 * Filter by classification name: name of any segment, genre, sub-genre, type, sub-type.
	 */
	classificationName?: string[];

	/**
	 * Filter by classification id: id of any segment, genre, sub-genre, type, sub-type.
	 */
	classificationId?: string[];

	/**
	 * Filter by dma id
	 */
	dmaId?: string;

	/**
	 * Filter with event local start date time within this range
	 */
	localStartDateTime?: string[];

	/**
	 * Filter event where event local start and end date overlap this range
	 */
	localStartEndDateTime?: string[];

	/**
	 * Filter event where event start and end date overlap this range
	 */
	startEndDateTime?: string[];

	/**
	 * Filter with events with public visibility starting
	 */
	publicVisibilityStartDateTime?: string[];

	/**
	 * Filter events with a presale start and end that intersects with this range
	 */
	preSaleDateTime?: string[];

	/**
	 * Filter with onsale start date on this date
	 */
	onsaleOnStartDate?: string;

	/**
	 * Filter with onsale range within this date
	 */
	onsaleOnAfterStartDate?: string;

	/**
	 * Filter by collection id
	 */
	collectionId?: string[];

	/**
	 * Filter by segment id
	 */
	segmentId?: string[];

	/**
	 * Filter by segment name
	 */
	segmentName?: string[];

	/**
	 * Filter by classification that are family-friendly. Default is 'yes'.
	 */
	includeFamily?: IncludeFamily;

	/**
	 * Filter by promoter id
	 */
	promoterId?: string;

	/**
	 * Filter by genreId
	 */
	genreId?: string[];

	/**
	 * Filter by subGenreId
	 */
	subGenreId?: string[];

	/**
	 * Filter by typeId
	 */
	typeId?: string[];

	/**
	 * Filter by subTypeId
	 */
	subTypeId?: string[];

	/**
	 * Filter events by geoHash
	 */
	geoPoint?: string;

	/**
	 * Popularity boost by country, default is us.
	 */
	preferredCountry?: PreferredCountry;

	/**
	 * Yes, to include spell check suggestions in the response. Default is 'no'.
	 */
	includeSpellcheck?: IncludeSpellcheck;
}
