// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount){
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;
    let total = (laptop * laptopCount) + (tablet * tabletCount) + (mobile * mobileCount);
    return total;
}


const result = calculateElectronicsBudget(2, 3, 4);
console.log("The total money required is ", result);