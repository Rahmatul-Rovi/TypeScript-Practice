    abstract class Employee {
    constructor(public name: string, public id: number) {}

    abstract calculateSalary(): number;

    displayDetails(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.calculateSalary()} TK`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(name: string, id: number, private monthlySalary: number) {
        super(name, id); 
    }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class ContractEmployee extends Employee {
    constructor(name: string, id: number, private hourlyRate: number, private hoursWorked: number) {
        super(name, id);
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}


const karim = new FullTimeEmployee("Karim", 1, 50000);
const rahim = new ContractEmployee("Rahim", 2, 500, 100); 

karim.displayDetails();
rahim.displayDetails();