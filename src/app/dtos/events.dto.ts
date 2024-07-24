import { AttractionDetailsDto } from "./attractions.dto";
import { ClassificationDetailsDto } from "./classifications.dto";
import { Image, Links, Page } from "./common.dto";
import { Address, City, Country, Location, State, VenueDetailsDto } from "./venues.dto";

export interface SalesPublic {
	startDateTime: string;
	startTBD: boolean;
	endDateTime: string;
}

export interface Presale {
	name: string;
	description: string;
	url: string;
	startDateTime: string;
	endDateTime: string;
}

export interface Sales {
	public: SalesPublic;
	presales: Presale[]
}

export interface Dates {
	start: {
		localDate: string;
		localTime: string;
		dateTime: string;
		dateTBD: boolean;
		dateTBA: boolean;
		timeTBA: boolean;
		noSpecificTime: boolean;
	};
	end: {
		localDate: string;
		localTime: string;
		dateTime: string;
		approximate: boolean;
		noSpecificTime: boolean;
	}
	access: {
		startDateTime: string;
		startApproximate: boolean;
		endDateTime: string;
		endApproximate: boolean;
	};
	timezone: string;
	status: {
		code: string;
	};
	spanMultipleDays: boolean;
}

export interface PriceRange {
	type: string;
	currency: string;
	min: number;
	max: number;
}

export interface Promoter {
	id: string;
	name: string;
	description: string;
}

export interface Product {
	id: string;
	name: string;
	type: string;
	url: string;
}

export interface Seatmap {
	staticUrl: string;
}

export interface Accessibility {
	info: string;
}

export interface TicketLimit {
	infos: string[];
	info: string;
}

export interface Place {
	area: {
		name: string;
	};
	address: Address;
	city: City;
	state: State;
	country: Country;
	postalCode: string;
	location: Location;
	name: string;
}

export interface EmbbededEvents {
	events: EventDetailsDto[];
}

export interface EventsDto {
	_links: Links;
	_embedded: EmbbededEvents;
	page: Page;
}

export interface EventDetailsDto {
	_embedded: {
		venues: VenueDetailsDto[];
		attractions: AttractionDetailsDto[];
	};
	_links: {
		self: {
			href: string;
		};
		attractions: {
			href: string;
		}[];
		venues: {
			href: string;
		}[];
	};
	type: string;
	distance: number;
	units: string;
	location: Location;
	id: string;
	locale: string;
	name: string;
	description: string;
	additionalInfo: string;
	url: string;
	images: Image[];
	dates: Dates;
	sales: Sales;
	info: string;
	pleaseNote: string;
	priceRanges: PriceRange[];
	promoter: Promoter;
	promoters: Promoter[];
	outlets: Array<{
		url: string;
		type: string;
	}>
	productType: string;
	products: Product[];
	seatmap: Seatmap;
	accessibility: Accessibility;
	ticketLimit: TicketLimit;
	classifications: ClassificationDetailsDto[];
	place: Place;
	externalLinks: string[];
	test: boolean;
	aliases: string[];
	localizedAliases: string[];
}

export interface EventImagesDto {
	type: string;
	id: string;
	images: Image[];
	_links: Links;
}
