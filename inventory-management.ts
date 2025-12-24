// inventory.ts
interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

class Shop {
    private products: Product[] = [];

    addProduct(item: Product): void {
        this.products.push(item);
        console.log(`Product "${item.name}" added.`);
    }

    findProduct(id: number): Product | string {
        const item = this.products.find(p => p.id === id);
        return item ? item : "Product not found!";
    }

    displayInventory(): void {
        console.log("--- Current Inventory ---");
        console.table(this.products);
    }
}

const myShop = new Shop();
myShop.addProduct({ id: 101, name: "Laptop", price: 55000, stock: 10 });
myShop.addProduct({ id: 102, name: "Mouse", price: 800, stock: 50 });

myShop.displayInventory();
console.log("Searching for ID 101:", myShop.findProduct(101));