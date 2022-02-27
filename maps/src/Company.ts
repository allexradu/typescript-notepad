import {randCompanyName, randFullName} from '@ngneat/falso';
import randomLocation from 'random-location'

export class Company {
    companyName: string;
    location: {
        lat: number;
        lng: number
    }

    constructor() {
        const P = {
            latitude: 37.7768006,
            longitude: -122.4187928
        }

        const R = 500000 // meters

        const randomPoint = randomLocation.randomCirclePoint(P, R)

        this.companyName = randCompanyName()
        this.location = {
            lat: randomPoint.latitude,
            lng: randomPoint.longitude
        }
    }
}