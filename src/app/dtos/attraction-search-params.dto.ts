import { BaseParamsDto } from "./base-params.dto";

type Source = 'ticketmaster' | 'universe' | 'frontgate' | 'tmr';
type IncludeTest = 'yes' | 'no' | 'only';
type SortOrder = 'name,asc' | 'name,desc' | 'relevance,asc' | 'relevance,desc' | 'random';
type IncludeFamily = 'yes' | 'no' | 'only';
type PreferredCountry = 'us' | 'ca';
type IncludeSpellcheck = 'yes' | 'no';

/**
 * DTO for attraction search parameters.
 */
export interface AttractionSearchParamsDto extends BaseParamsDto {
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
	source?: Source;

	/**
	 * Yes if you want to have entities flag as test in the response. Only, if you only wanted test entities.
	 * Default value is 'no'.
	 */
	includeTest?: IncludeTest;

	/**
	 * Page size of the response. Default value is 20.
	 */
	size?: string;

	/**
	 * Page number. Default value is 0.
	 */
	page?: string;

	/**
	 * Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'random'.
	 * Default value is 'relevance,desc'.
	 */
	sort?: SortOrder;

	/**
	 * Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type.
	 */
	classificationName?: string[];

	/**
	 * Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type.
	 */
	classificationId?: string[];

	/**
	 * Filter by classification that are family-friendly. Default value is 'yes'.
	 */
	includeFamily?: IncludeFamily;

	/**
	 * Filter attractions by segmentId.
	 */
	segmentId?: string[];

	/**
	 * Filter attractions by genreId.
	 */
	genreId?: string[];

	/**
	 * Filter attractions by subGenreId.
	 */
	subGenreId?: string[];

	/**
	 * Filter attractions by typeId.
	 */
	typeId?: string[];

	/**
	 * Filter attractions by subTypeId.
	 */
	subTypeId?: string[];

	/**
	 * Popularity boost by country, default is 'us'.
	 */
	preferredCountry?: PreferredCountry;

	/**
	 * Yes, to include spell check suggestions in the response. Default value is 'no'.
	 */
	includeSpellcheck?: IncludeSpellcheck;
}
