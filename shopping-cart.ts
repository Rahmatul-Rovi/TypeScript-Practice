interface Product {
    id: number;
    name: string;
    price: number;
}

class ShoppingCart {
    private items: Product[] = [];

    addItem(product: Product): void {
        this.items.push(product);
        console.log(`${product.name} Add to the Cart.`);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    showCart(): void {
        console.log("---Your Shopping Cart---");
        console.table(this.items);
    }
}

const myCart = new ShoppingCart();

const laptop: Product = { id: 101, name: "Laptop", price: 45000 };
const mouse: Product = { id: 102, name: "Mouse", price: 800 };

myCart.addItem(laptop);
myCart.addItem(mouse);

myCart.showCart();
console.log(`Your total bill: ${myCart.getTotalPrice()} TK`);