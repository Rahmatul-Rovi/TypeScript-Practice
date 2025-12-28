// shopping-cart.ts
type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

const myCart: CartItem[] = [
    { name: "Smartphone", price: 25000, quantity: 1 },
    { name: "Headphones", price: 2000, quantity: 2 },
    { name: "Case", price: 500, quantity: 3 }
];

function calculateTotal(items: CartItem[]): void {
    let total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Subtotal: ${total} BDT`);

    if (total > 20000) {
        const discount = total * 0.10; // 10% discount
        total -= discount;
        console.log(`Discount (10%): -${discount} BDT`);
    }

    console.log(`Final Amount: ${total} BDT`);
}

calculateTotal(myCart);