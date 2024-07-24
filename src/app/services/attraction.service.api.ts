import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AttractionSearchParamsDto } from "../dtos/attraction-search-params.dto";
import { AttractionDetailsDto, AttractionsDto } from "../dtos/attractions.dto";
import { BaseParamsDto } from "../dtos/base-params.dto";

@Injectable()
export class AttractionServiceApi {

	constructor(private http: HttpClient) { }

	/**
	 * Method: GET
	 * Summary: Attraction Search
	 * Description: Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.
	 */
	public getAttractionSearch(params: AttractionSearchParamsDto) {
		return this.http.get<AttractionsDto>(`attractions`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Attraction Details
	 * Description: Get details for a specific attraction using the unique identifier for the attraction.
	 */
	public getAttractionDetails(id: string, params: BaseParamsDto) {
		return this.http.get<AttractionDetailsDto>(`attractions/${id}`, { params: params as HttpParams });
	}
}
