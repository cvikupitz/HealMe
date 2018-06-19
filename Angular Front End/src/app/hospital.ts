import { Address } from './address';

export class Hospital {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    address: Address;
    distance: number;
    injuryCost: InjuryCost[];

    constructor(id: number, name: string,
        latitude: number, longitude: number, address: Address) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
    }

}

export class InjuryCost {
    id: number;
    injury: Injury;
    cost: number;
}

export class Injury {
    id: number;
    name: string;
}
