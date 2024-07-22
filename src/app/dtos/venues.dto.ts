import { Image, Links, Page } from "./common.dto";

export interface Location {
	longitude: string;
	latitude: string;
}

export interface Address {
	line1: string;
	line2: string;
	line3: string;
}

export interface City {
	name: string;
}

export interface Country {
	name: string;
	countryCode: string;
}

export interface State {
	name: string;
	stateCode: string;
}

export interface Market {
	id: string;
	name: string;
}

export interface Dma {
	id: number;
}

export interface Social {
	twitter: {
		handle: string;
		hashtags: string[];
	};
}

export interface BoxOfficeInfo {
	phoneNumberDetail: string;
	openHoursDetail: string;
	acceptedPaymentDetail: string;
	willCallDetail: string;
}

export interface GeneralInfo {
	generalRule: string;
	childRule: string;
}

export interface UpcomingEvents {
	_total: number;
	ticketmaster: number;
}

export interface Ada {
	adaPhones: string;
	adaCustomCopy: string;
	adaHours: string;
}

export interface EmbeddedVenue {
	venues: VenueDetailsDto[];
}

export interface VenuesDto {
	_embedded: EmbeddedVenue;
	_links: Links;
	page: Page;
}

export interface VenueDetailsDto {
	_links: Links;
	type: string;
	distance: number;
	units: string;
	id: string;
	locale: string;
	name: string;
	description: string;
	address: Address;
	city: City;
	additionalInfo: string;
	state: State;
	country: Country;
	url: string;
	postalCode: string;
	location: Location;
	timezone: string;
	currency: string;
	markets: Market[];
	images: Image[];
	dma: Dma[];
	social: Social;
	boxOfficeInfo: BoxOfficeInfo;
	parkingDetail: string;
	accessibleSeatingDetail: string;
	generalInfo: GeneralInfo;
	externalLinks: string[];
	test: boolean;
	aliases: string[];
	localizedAliases: string[];
	upcomingEvents: UpcomingEvents;
	ada: Ada;
}
