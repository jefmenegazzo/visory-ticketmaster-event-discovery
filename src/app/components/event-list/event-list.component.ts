import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ProgressBarModule } from 'primeng/progressbar';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { finalize, Subscription } from 'rxjs';
import { EventSearchParamsDTO as EventSearchParamsDto } from '../../dtos/event-search-params.dto';
import { EventsDto } from '../../dtos/events.dto';
import { EventDataSource } from '../../models/event-data-source';
import { BreakpointService } from '../../services/breakpoint.service';
import { EventServiceApi } from '../../services/event.service.api';
import { EventSearchBarComponent } from '../event-search-bar/event-search-bar.component';

@Component({
	selector: 'app-event-list',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		DataViewModule,
		SkeletonModule,
		TagModule,
		ButtonModule,
		ProgressBarModule,
		EventSearchBarComponent,
		ScrollTopModule,
		ToastModule
	],
	providers: [
		EventServiceApi
	],
	templateUrl: './event-list.component.html',
	styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit, OnDestroy {

	loading = false;
	layout: "list" | "grid" = 'grid';

	events: EventDataSource[] = [];

	eventsPage: {
		size: number;
		page: number;
		loaded: number;
		total: number;
	} = {
			size: 20,
			page: 0,
			loaded: 0,
			total: 0
		};

	eventSearchParamsDto: EventSearchParamsDto = {
		page: '0',
		size: '20'
	};

	subscriptions: Subscription[] = [];

	screenSize: string = '';

	loadEventsSubscription: Subscription | null = null;

	get isSmallScreen() {
		return this.screenSize === 'xs' || this.screenSize === 'sm' || this.screenSize === 'md';
	}

	constructor(
		private readonly eventServiceApi: EventServiceApi,
		private readonly breakpointService: BreakpointService
	) { }

	ngOnInit() {

		const subscription = this.breakpointService.screenSize$.subscribe(size => {
			this.screenSize = size;

			if (this.isSmallScreen) {
				this.layout = 'list';
			}

		});

		this.subscriptions.push(subscription);

		this.loadEvents(this.eventSearchParamsDto);
	}

	ngOnDestroy() {

		for (const subscription of this.subscriptions) {
			subscription.unsubscribe();
		}
	}

	counterArray(n: number): any[] {
		return Array(n);
	}

	loadEvents($event: EventSearchParamsDto) {

		if ($event != this.eventSearchParamsDto) {
			this.eventsPage.page = 0;
			this.events = [];
		}

		this.eventSearchParamsDto = $event;
		this.eventSearchParamsDto.page = this.eventsPage.page.toString();
		this.eventSearchParamsDto.size = this.eventsPage.size.toString();


		if (this.loadEventsSubscription) {
			this.loadEventsSubscription.unsubscribe();
		}

		this.loading = true;

		this.loadEventsSubscription = this.eventServiceApi.getEventSearch($event)
			.pipe(
				finalize(() => {
					this.loading = false;
					this.loadEventsSubscription = null;
				})
			).subscribe({
				next: (events: EventsDto) => {

					const newData = events._embedded?.events.map(event => new EventDataSource(event)) || [];
					this.events = [...this.events, ...newData];

					if (events._links.next) {
						this.eventsPage.page++;
					}

					this.eventsPage.total = events.page.totalElements;
					this.eventsPage.loaded = this.events.length;
				},
				error: () => { }
			});
	}

	goToLink(url: string) {
		window.open(url, "_blank");
	}
}
