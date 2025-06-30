
function calculateTax(income, expense){
    if(income < 0 || expense < 0 || expense > income){
        return "Invalid Input!"
    }
    else{
        let remainedTaka = income - expense;
        let tax = remainedTaka * 20 / 100;
        return tax;
    }
}

console.log(calculateTax(10000, 3000)); // 1400
console.log(calculateTax(34000, 1753)); // 6449.4
console.log(calculateTax(5000, 1500));  // 700
console.log(calculateTax(7000, 7000));  // 0
console.log(calculateTax(-5000, 2000)); // Invalid Input
console.log(calculateTax(6000, -1500)); // Invalid Input
console.log(calculateTax(3000, 5000));  // Invalid Input