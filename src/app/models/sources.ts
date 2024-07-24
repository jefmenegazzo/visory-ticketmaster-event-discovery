export interface Source {
	id: string;
	label: string;
}

export const sources: Source[] = [
	{ id: 'ticketmaster', label: 'Ticketmaster' },
	{ id: 'tmr', label: 'Ticketmaster Resale Platform' },
	{ id: 'universe', label: 'Universe' },
	{ id: 'frontgate', label: 'Frontgate' }
];
