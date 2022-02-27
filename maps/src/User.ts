import {randFullName} from '@ngneat/falso';
import randomLocation from 'random-location'

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        const P = {
            latitude: 37.7768006,
            longitude: -122.4187928
        }

        const R = 500 // meters

        const randomPoint = randomLocation.randomCirclePoint(P, R)

        this.name = randFullName()
        this.location = {
            lat: randomPoint.latitude,
            lng: randomPoint.longitude
        }
    }
}