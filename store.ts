// store.ts
type Product = {
    readonly id: number; 
    name: string;
    price: number;
    description?: string; 
};

function displayProduct(p: Product) {
    console.log(`Product: ${p.name} | Price: ${p.price} BDT`);
    if (p.description) {
        console.log(`Description: ${p.description}`);
    }
}

displayProduct({ id: 1, name: "Keyboard", price: 1200 });
displayProduct({ id: 2, name: "Mouse", price: 500, description: "Wireless Optical Mouse" });