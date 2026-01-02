// area.ts
class ShapeCalculator {
    circle(radius: number): string {
        return `Circle Area: ${(Math.PI * radius * radius).toFixed(2)}`;
    }

    rectangle(width: number, height: number): string {
        return `Rectangle Area: ${width * height}`;
    }
}

const calc = new ShapeCalculator();
console.log(calc.circle(5));
console.log(calc.rectangle(10, 20));