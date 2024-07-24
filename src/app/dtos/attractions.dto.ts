import { ClassificationDetailsDto } from "./classifications.dto";
import { Image, Links, Page } from "./common.dto";

export interface EmbeddedAttraction {
	attractions: AttractionDetailsDto[];
}

export interface AttractionsDto {
	_links: Links;
	_embedded: EmbeddedAttraction;
	page: Page;
}

export interface AttractionDetailsDto {
	_links: Links;
	type: string;
	id: string;
	locale: string;
	name: string;
	description: string;
	additionalInfo: string;
	url: string;
	images: Image[];
	classifications: ClassificationDetailsDto[];
	externalLinks: string[];
	test: boolean;
	aliases: string[];
	localizedAliases: string[];
	upcomingEvents: string[];
}
