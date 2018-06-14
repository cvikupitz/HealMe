export class User {
    id: number;
    email: string;
    insurance: Insurance;
    username: string;
    password: string;
    address: Address;

    constructor() { }
}

export class Address {
    address: string;
    zipcode: string;
    state: string;
    city: string;
}

export class Insurance {
    id: number;
    name: string;
}
