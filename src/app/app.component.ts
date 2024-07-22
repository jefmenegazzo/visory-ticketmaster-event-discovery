import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MenubarModule
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {

	constructor() { }

	items: MenuItem[] = [
		{
			label: 'Events',
			icon: 'pi pi-calendar',
			route: '/event-list'
		},
		{
			label: 'Attractions',
			icon: 'pi pi-users',
			route: '/attraction-list'
		},
		{
			label: 'Venues',
			icon: 'pi pi-map-marker',
			route: '/venue-list'
		}
	];
}
