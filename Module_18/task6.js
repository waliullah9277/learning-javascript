/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let age = 94;

if (age < 10) {
    const payAmount = 0;
    console.log(`You can pay ${payAmount} taka, because you are a child!`);
} else if (age >= 10 && age <= 28) {
    const discount = ticketPrice * 50 / 100; // discount 50%
    const payAmount = ticketPrice - discount;
    console.log(`You can pay ${payAmount} taka, because you are a student!`);
} else if (age >= 60) {
    const discount = ticketPrice * 15 / 100; // discount 15%
    const payAmount = ticketPrice - discount;
    console.log(`You can pay ${payAmount} taka, because you are a senior citizen!`);
} else {
    console.log(`You can pay ${ticketPrice} taka, because you are a regular passenger!`);
}
