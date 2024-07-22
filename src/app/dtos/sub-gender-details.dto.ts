import { Links } from "./common.dto";

export interface SubGenreDetailsDto {
	id: string;
	name: string;
	locale: string;
	_links?: Links;
}
