import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'event-list',
		loadChildren: () => import('./components/event-list/event-list.module').then(m => m.EventListModule)
	},
	{
		path: 'attraction-list',
		loadChildren: () => import('./components/attraction-list/attraction-list.module').then(m => m.AttractionListModule)
	},
	{
		path: 'venue-list',
		loadChildren: () => import('./components/venue-list/venue-list.module').then(m => m.VenueListModule)
	},
	{
		path: '',
		redirectTo: 'event-list',
		pathMatch: 'full'
	}
];
