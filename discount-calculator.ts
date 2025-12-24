// discount.ts
function getDiscountedPrice(price: number, discountPercentage: number): string {
    const savings = (price * discountPercentage) / 100;
    const finalPrice = price - savings;
    return `Original: $${price} | Discount: ${discountPercentage}% | Final: $${finalPrice}`;
}

console.log(getDiscountedPrice(1000, 15)); // 15% off 1000
console.log(getDiscountedPrice(500, 50));   // 50% off 500