function getShippingCost(country) {
  let priceDelivery;
  switch (country) {
    case "China":
      priceDelivery = 100;
      break;
    case "Chile":
      priceDelivery = 250;
      break;
    case "Australia":
      priceDelivery = 170;
      break;
    case "Jamaica":
      priceDelivery = 120;
      break;
    default:
      return `"Sorry, there is no delivery to your country"`;
  }
  return `"Shipping to ${country} will cost ${priceDelivery} credits"`;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
