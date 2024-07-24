import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClassificationSearchParamsDTO } from "../dtos/classification-search-params.dto";
import { ClassificationDetailsDto, ClassificationsDto } from "../dtos/classifications.dto";
import { SegmentDetailsDto } from "../dtos/segment.dto";
import { BaseParamsDto } from "../dtos/base-params.dto";
import { GenreDetailsDto } from "../dtos/genre-details.dto";
import { SubGenreDetailsDto } from "../dtos/sub-gender-details.dto";

@Injectable()
export class ClassificationServiceApi {

	constructor(private http: HttpClient) { }

	/**
	* Method: GET
	* Summary: Classification Search
	* Description: Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.
	*/
	public getClassificationSearch(params: ClassificationSearchParamsDTO) {
		return this.http.get<ClassificationsDto>(`classifications`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Classification Details
	 * Description: Get details for a specific segment, genre, or sub-genre using its unique identifier.
	 */
	public getClassificationDetails(id: string, params: BaseParamsDto) {
		return this.http.get<ClassificationDetailsDto>(`classifications/${id}`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Genre Details
	 * Description: Get details for a specific genre using its unique identifier.
	 */
	public getGenreDetails(id: string, params: BaseParamsDto) {
		return this.http.get<GenreDetailsDto>(`classifications/genres/${id}`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Segment Details
	 * Description: Get details for a specific segment using its unique identifier.
	 */
	public getSegmentDetails(id: string, params: BaseParamsDto) {
		return this.http.get<SegmentDetailsDto>(`classifications/segments/${id}`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Sub-Genre Details
	 * Description: Get details for a specific sub-genre using its unique identifier.
	 */
	public getSubGenreDetails(id: string, params: BaseParamsDto) {
		return this.http.get<SubGenreDetailsDto>(`classifications/subgenres/${id}`, { params: params as HttpParams });
	}
}
