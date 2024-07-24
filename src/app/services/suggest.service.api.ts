import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FindSuggestParamsDto } from "../dtos/find-suggest-params.dto";
import { FindSuggestDto } from "../dtos/find-suggest.dto";

@Injectable()
export class SuggestServiceApi {

	constructor(private http: HttpClient) { }

	/**
	* Method: GET
	* Summary:
	* Description: Find search suggestions and filter your suggestions by location, source, etc.
	*/
	public getFindSuggest(params: FindSuggestParamsDto) {
		return this.http.get<FindSuggestDto>(`suggest`, { params: params as HttpParams });
	}
}
