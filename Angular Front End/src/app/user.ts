export class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    insurance: Insurance;
    username: string;
    password: string;
    address: Address;

    constructor() {
        this.address = new Address();
        this.insurance = new Insurance;
    }
}

export class Address {
    address: string;
    zip: string;
    state: string;
    city: string;
}

export class Insurance {
    id: number;
    name: string;
}
