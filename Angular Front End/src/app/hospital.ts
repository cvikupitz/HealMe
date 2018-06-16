import { Address } from './user';

export class Hospital {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    address: Address;

    constructor(id: number, name: string,
        latitude: number, longitude: number, address: Address) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
    }

}

export class InjuryTreatment {
    injury: string;
    cost: number;

    constructor(injury: string, cost: number) {
        this.injury = injury;
        this.cost = cost;
    }
}
