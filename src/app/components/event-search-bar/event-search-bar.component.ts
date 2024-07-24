import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { formatISO } from 'date-fns';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, distinctUntilChanged, EMPTY, Subscription, switchMap } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Subject } from 'rxjs/internal/Subject';
import { EventSearchParamsDTO } from '../../dtos/event-search-params.dto';
import { VenueSearchParamsDto } from '../../dtos/venue-search-params.dto';
import { VenuesDto } from '../../dtos/venues.dto';
import { VenueDataSource } from '../../models/venue-data-source';
import { BreakpointService } from '../../services/breakpoint.service';
import { VenueServiceApi } from '../../services/venue.service.api';

@Component({
	selector: 'app-event-search-bar',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		InputTextModule,
		ButtonModule,
		CalendarModule,
		DropdownModule,
		CalendarModule,
		InputGroupModule,
		InputGroupAddonModule,
		AutoCompleteModule,
		IconFieldModule,
		InputIconModule
	],
	providers: [
		VenueServiceApi
	],
	templateUrl: './event-search-bar.component.html',
	styleUrl: './event-search-bar.component.scss',
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventSearchBarComponent implements OnInit {

	@Input()
	searchLoading: boolean = false;

	@Output()
	onSearchRequested = new EventEmitter<EventSearchParamsDTO>();

	location: {
		loading: boolean;
		page: number;
		size: number;
		textSearch: VenueDataSource | null;
		suggestions: VenueDataSource[];
	} = {
			loading: false,
			page: 0,
			size: 20,
			textSearch: null,
			suggestions: []
		};

	venueSearchParamsDto: VenueSearchParamsDto = {
		keyword: '',
		includeTest: "no",
		sort: "relevance,desc",
		page: this.location.page.toString(),
		size: this.location.size.toString()
		// geoPoint
		// radius
		// unit
	};

	dates: {
		minDate: Date;
		rangeDates: Date[] | null;
	} = {
			minDate: new Date(),
			rangeDates: null
		}

	searchText: {
		searchString: string | null;
		searchSubject: Subject<string | null>;
	} = {
			searchString: null,
			searchSubject: new Subject<string | null>(),
		}

	subscriptions: Subscription[] = [];

	screenSize: string = '';

	get isSmallScreen() {
		return this.screenSize === 'xs' || this.screenSize === 'sm' || this.screenSize === 'md';
	}

	get numberOfMonths() {
		return this.isSmallScreen ? 1 : 2;
	}

	constructor(
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly venueServiceApi: VenueServiceApi,
		private readonly breakpointService: BreakpointService
	) {

		const subscription = this.searchText.searchSubject.pipe(
			debounceTime(500),
			distinctUntilChanged(),
			switchMap(term => {
				this.searchEvents();
				return EMPTY;
			})
		).subscribe();

		this.subscriptions.push(subscription);
	}

	ngOnInit(): void {
		const subscription = this.breakpointService.screenSize$.subscribe(size => {
			this.screenSize = size;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy() {

		for (const subscription of this.subscriptions) {
			subscription.unsubscribe();
		}
	}

	// TODO: load more on scroll
	// TODO: search based on location
	searchLocations($event: AutoCompleteCompleteEvent) {

		if ($event.query != this.venueSearchParamsDto.keyword) {
			this.location.page = 0;
			this.location.suggestions = [];
		}

		this.venueSearchParamsDto.keyword = $event.query;
		this.venueSearchParamsDto.page = this.location.page.toString();

		this.location.loading = true;

		this.venueServiceApi.getVenueSearch(this.venueSearchParamsDto)
			.pipe(
				finalize(() => {
					this.location.loading = false;
				})
			).subscribe({
				next: (venues: VenuesDto) => {

					const newData = venues._embedded?.venues.map(venue => new VenueDataSource(venue)) || [];

					this.location.suggestions = [...this.location.suggestions, ...newData];

					if (venues._links.next) {
						this.location.page++;
					}
				},
				error: () => { }
			});
	}

	clearSearchTextString() {
		this.searchText.searchString = null;
		this.searchEvents();
		// this.searchText.searchSubject.next(this.searchText.searchString);
	}

	searchEvents() {

		const dto: EventSearchParamsDTO = {};

		if (this.searchText.searchString) {
			dto.keyword = this.searchText.searchString;
		}

		if (this.location.textSearch) {
			dto.venueId = this.location.textSearch.venue.id;
		}

		if (this.dates.rangeDates && this.dates.rangeDates.length > 0) {

			if (this.dates.rangeDates[0]) {
				dto.startDateTime = formatISO(this.dates.rangeDates[0], { representation: 'complete' });
			}

			if (this.dates.rangeDates[1]) {
				dto.endDateTime = formatISO(this.dates.rangeDates[1], { representation: 'complete' });
			}
		}

		this.onSearchRequested.emit(dto);
	}
}
