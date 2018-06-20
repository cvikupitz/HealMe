import { Insurance } from './insurance';
import { Address } from './address';

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
        this.insurance = new Insurance();
    }
}
