//Q-1:Calculating the total bill of a restaurant order with 10% tip.//
let foodPrice = 500; 
let drinkPrice = 200; 
let totalPrice = foodPrice+drinkPrice;
let tip = totalPrice*10/100;

console.log(`final amount :${totalPrice+tip}`);

// Q-2:Calculating the final price after the discount.
let originalPrice = 1000;
let discount = 200;
let finalPrice = originalPrice-discount;

console.log(`The final price after discount is`+finalPrice);

//Q-3:calculates the total amount a customer needs to pay after adding sales tax to the product price
let productPrice=600;
let salesTaxRate=0.08;
let tax=productPrice*salesTaxRate;
console.log(`total price:${productPrice+tax}`);
