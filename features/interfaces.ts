// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean
//
//     summary(): string;
// }

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonates: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic);
printSummary(drink);

