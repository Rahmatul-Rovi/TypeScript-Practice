function calculate(a, b, op) {
    switch (op) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid Operation";
    }
}
console.log("Addition:", calculate(10, 5, 'add'));
console.log("Division:", calculate(10, 0, 'divide'));
