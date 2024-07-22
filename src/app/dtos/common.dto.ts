export interface Link {
	href: string;
	templated?: boolean;
}

export interface Links {
	self: Link;
	next?: Link;
	prev?: Link;
}

export interface Page {
	size: number;
	totalElements: number;
	totalPages: number;
	number: number;
}

export interface Image {
	ratio: string;
	url: string;
	width: number;
	height: number;
	fallback: boolean;
	attribution: string;
}
