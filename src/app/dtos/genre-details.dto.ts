import { Links } from "./common.dto";
import { SubGenreDetailsDto } from "./sub-gender-details.dto";

export interface EmbeddedGenre {
	subgenres: SubGenreDetailsDto[];
}

export interface GenreDetailsDto {
	id: string;
	name: string;
	locale: string;
	subGenres: SubGenreDetailsDto[];
	_embedded?: EmbeddedGenre;
	_links?: Links;
}
