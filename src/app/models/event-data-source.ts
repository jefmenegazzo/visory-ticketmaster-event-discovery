import { EventDetailsDto } from "../dtos/events.dto";

export class EventDataSource {

	event!: EventDetailsDto;

	get eventImage() {
		return this.event.images?.find(i => i.ratio === '16_9' && i.height < 400)?.url;
	}

	get eventTitle() {
		return this.event.name;
	}

	get eventSubTitle() {

		if (this.event.classifications && this.event.classifications.length > 0) {
			const classification = this.event.classifications[0];
			let value = classification.segment.name;

			if (classification.genre && classification.genre.name != "Undefined") {
				value += ` • ${classification.genre.name}`;
			}

			if (classification.subGenre && classification.subGenre.name != "Undefined") {
				value += ` • ${classification.subGenre.name}`;
			}

			return value;
		}

		return "";
	}

	get eventStatus() {

		let publicSale = null;
		let presale = null;
		const today = new Date();

		if (this.event.sales?.public && this.event.sales?.public.startDateTime && this.event.sales?.public.endDateTime) {

			publicSale = {
				startDateTime: new Date(this.event.sales?.public.startDateTime),
				endDateTime: new Date(this.event.sales?.public.endDateTime)
			}
		}

		if (this.event.sales?.presales) {

			const presales = this.event.sales?.presales
				.map(presale => {

					const startDateTime = new Date(presale.startDateTime);
					const endDateTime = new Date(presale.endDateTime);

					return {
						startDateTime,
						endDateTime
					}

				})
				.sort((a, b) => a.startDateTime.getTime() - b.startDateTime.getTime())
				.filter(presale => presale.startDateTime >= today || today <= presale.endDateTime)

			if (presales.length > 0) {
				presale = presales[0];
			}
		}

		if (publicSale && today >= publicSale.startDateTime && today <= publicSale.endDateTime) {
			return "ON SALE NOW";
		}

		if (presale && today >= presale.startDateTime && today <= presale.endDateTime) {
			return "PRESALE NOW";
		}

		if (publicSale && presale) {

			if (publicSale.startDateTime < presale.startDateTime && today <= publicSale.startDateTime) {
				return "ON SALE: " + publicSale.startDateTime.toLocaleDateString();

			} else {
				return "PRESALE: " + presale.startDateTime.toLocaleDateString();
			}

		} else if (publicSale) {
			return "ON SALE: " + publicSale.startDateTime.toLocaleDateString();

		} else if (presale) {
			return "PRESALE: " + presale.startDateTime.toLocaleDateString();

		} else {

			switch (this.event.dates?.status?.code) {
				case 'onsale':
					return 'On Sale';

				case 'offsale':
					return 'OFF SALE';

				case 'cancelled':
					return 'CANCELLED';

				default:
					return '';
			}
		}
	}

	get eventStatusColor() {

		if (this.eventStatus.startsWith('PRESALE')) {
			return 'help';

		} else if (this.eventStatus.startsWith('ON SALE')) {
			return 'success';

		} else if (this.eventStatus.startsWith('OFF SALE')) {
			return 'warning';

		} else if (this.eventStatus.startsWith('CANCELLED')) {
			return 'danger';

		} else {
			return '';
		}
	}

	get eventStartDateTime() {

		if (this.event.dates?.start.localDate) {

			let value = this.event.dates?.start.localDate;

			if (this.event.dates?.start.localTime) {
				value += `T${this.event.dates?.start.localTime}`;
			}

			return value

		} else if (this.event.dates?.start.dateTBA) {
			return "TBA";

		} else if (this.event.dates?.start.dateTBD) {
			return "TBD";
		}

		return "";
	}

	get eventEndDateTime() {

		if (this.event.dates?.end?.localDate) {

			let value = this.event.dates?.end.localDate;

			if (this.event.dates?.end.localTime) {
				value += `T${this.event.dates?.end.localTime}`;
			}

			return value

		}

		return "";
	}

	get eventLocation() {

		if (this.event._embedded?.venues && this.event._embedded?.venues.length > 0) {

			const venue = this.event._embedded?.venues[0];
			let value = "";

			if (venue.city) {
				value += `${venue.city.name}`;
			}

			if (venue.state) {
				value += `, ${venue.state.stateCode}`;
			}

			if (venue.name) {
				value += ` • ${venue.name}`;
			}

			return value;
		}

		return "";
	}

	get eventUrl() {
		return this.event.url;
	}

	constructor(event: EventDetailsDto) {
		this.event = event;
		this.event.images = this.event.images?.sort((a, b) => b.height - a.height);
	}
}
