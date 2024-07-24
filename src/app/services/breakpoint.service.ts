import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, merge } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BreakpointService implements OnDestroy {

	private screenSize = new BehaviorSubject<string>(this.getScreenSize());
	screenSize$ = this.screenSize.asObservable();
	private resizeSubscription;

	constructor() {
		this.resizeSubscription = merge(
			fromEvent(window, 'resize'),
			fromEvent(window, 'orientationchange')
		).pipe(
			startWith(this.getScreenSize()),
			map(() => this.getScreenSize())
		).subscribe(size => {
			this.screenSize.next(size);
		});
	}

	private getScreenSize(): string {

		const width = window.innerWidth;

		if (width < 576) {
			return 'xs';
		} else if (width >= 576 && width < 768) {
			return 'sm';
		} else if (width >= 768 && width < 992) {
			return 'md';
		} else if (width >= 992 && width < 1200) {
			return 'lg';
		} else {
			return 'xl';
		}
	}

	ngOnDestroy(): void {
		if (this.resizeSubscription) {
			this.resizeSubscription.unsubscribe();
		}
	}
}
