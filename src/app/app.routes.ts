import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'event',
		loadChildren: () => import('./components/event-list/event-list.module').then(m => m.EventListModule)
	},
	{
		path: '',
		redirectTo: 'event',
		pathMatch: 'full'
	}
];
