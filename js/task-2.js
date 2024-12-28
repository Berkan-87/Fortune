function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 50, 10));
console.log(getShippingMessage("Germany", 100, 20));
console.log(getShippingMessage("Sweden", 200, 15));

