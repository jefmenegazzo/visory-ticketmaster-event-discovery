import { Links } from "./common.dto";
import { GenreDetailsDto } from "./genre-details.dto";

export interface EmbeddedSegment {
	genres: GenreDetailsDto[];
}

export interface SegmentDetailsDto {
	id: string;
	name: string;
	locale: string;
	_links?: Links;
	_embedded?: EmbeddedSegment;
}
