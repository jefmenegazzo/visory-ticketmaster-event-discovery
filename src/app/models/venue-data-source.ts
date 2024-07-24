import { VenueDetailsDto } from "../dtos/venues.dto";

export class VenueDataSource {

	venue: VenueDetailsDto;

	get locationSearchLabel(): string {

		let value = this.venue.name;

		if (this.venue.city) {
			value += ` - ${this.venue.city.name}`;
		}

		if (this.venue.state) {
			value += `, ${this.venue.state.stateCode}`;
		}

		if (this.venue.country) {
			value += `, ${this.venue.country.countryCode}`;
		}

		return value;
	}

	constructor(venue: VenueDetailsDto) {
		this.venue = venue;
	}
}
