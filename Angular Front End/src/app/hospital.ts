export class Hospital {
    id: number;
    name: string;
    address: string;
    distance: number;
    treatments: [InjuryTreatment];

    constructor(id: number, name: string, address: string, distance: number, treatements: [InjuryTreatment]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.distance = distance;
        this.treatments = treatements;
    }

    getTotalCost(): number {
        let total = 0;

        for (let i = 0; i < this.treatments.length; i++) {
            total += this.treatments[i].cost;
        }

        return total;
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
