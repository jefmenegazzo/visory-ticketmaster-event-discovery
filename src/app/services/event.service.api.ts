import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseParamsDto } from "../dtos/base-params.dto";
import { EventSearchParamsDTO } from "../dtos/event-search-params.dto";
import { EventDetailsDto, EventImagesDto, EventsDto } from "../dtos/events.dto";

@Injectable()
export class EventServiceApi {

	constructor(private http: HttpClient) { }

	/**
	* Method: GET
	* Summary: Event Search
	* Description: Find events and filter your search by location, date, availability, and much more.
	*/
	public getEventSearch(params: EventSearchParamsDTO) {
		return this.http.get<EventsDto>(`events`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Event Details
	 * Description: Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.
	 */
	public getEventDetails(id: string, params: BaseParamsDto) {
		return this.http.get<EventDetailsDto>(`events/${id}`, { params: params as HttpParams });
	}

	/**
	 * Method: GET
	 * Summary: Get Event Images
	 * Description: Get images for a specific event using the unique identifier for the event.
	 */
	public getEventImages(id: string, params: BaseParamsDto) {
		return this.http.get<EventImagesDto>(`events/${id}/images`, { params: params as HttpParams });
	}
}
