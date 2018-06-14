export class User {
    id: number;
    email: string;
    insurance: Insurance;
    username: string;
    password: string;
    address: Address;

    constructor() { }
}

class Address {
    address: string;
    zipcode: string;
    state: string;
    city: string;
}

class Insurance {
    id: number;
    name: string;
}
