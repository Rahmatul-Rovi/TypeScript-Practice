// pairs.ts
class Pair<T, U> {
    constructor(public first: T, public second: U) {}

    display(): void {
        console.log(`First: ${this.first}, Second: ${this.second}`);
    }
}

const result1 = new Pair<string, number>("Score", 100);
result1.display();

const result2 = new Pair<boolean, string>(true, "Status Active");
result2.display();