import { Links, Page } from "./common.dto";
import { GenreDetailsDto } from "./genre-details.dto";
import { SegmentDetailsDto } from "./segment.dto";
import { SubGenreDetailsDto } from "./sub-gender-details.dto";

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
	genre: GenreDetailsDto;
	subGenre: SubGenreDetailsDto;
	primary: boolean;
	type: Type;
	subType: Type;
	family: boolean;
}
