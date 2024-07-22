import { Links, Page } from "./common.dto";
import { SegmentDetailsDto } from "./segment.dto";

export interface EmbeddedClassification {
	classifications: ClassificationDetailsDto[];
}

export interface ClassificationsDto {
	_links: Links;
	_embedded: EmbeddedClassification;
	page: Page;
}

export interface Type {
	_links?: Links;
	id: string;
	name: string;
	locale: string;
	subTypes?: Type[];
}

export interface ClassificationDetailsDto {
	_links: Links;
	segment: SegmentDetailsDto;
	primary: boolean;
	type: Type;
	subType: Type;
	family: boolean;
}
