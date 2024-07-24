import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSearchBarComponent } from './event-search-bar.component';

describe('EventSearchBarComponent', () => {
	let component: EventSearchBarComponent;
	let fixture: ComponentFixture<EventSearchBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EventSearchBarComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(EventSearchBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
