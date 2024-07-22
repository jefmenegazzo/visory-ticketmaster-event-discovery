import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseParamsDto } from "../dtos/base-params.dto";
import { VenueSearchParamsDto } from "../dtos/venue-search-params.dto";
import { VenueDetailsDto, VenuesDto } from "../dtos/venues.dto";

@Injectable()
export class VenueServiceApi {

	constructor(private http: HttpClient) { }

	/**
	* Method: GET
	* Summary: Venue Search
	* Description: Find venues and filter your search by name, and much more.
	*/
	public getVenueSearch(params: VenueSearchParamsDto) {
		return this.http.get<VenuesDto>(`venues`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Venue Details
	 * Description: Get details for a specific venue using the unique identifier for the venue.
	 */
	public getVenueDetails(id: string, params: BaseParamsDto) {
		return this.http.get<VenueDetailsDto>(`venues/${id}`, { params: params as HttpParams });
	}
}
