// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOdd(num){
    if(num % 2 === 0){
        console.log(num," is the even number!")
        const result = num / 2;
        return result;
    }
    else{
        console.log(num," is the odd number!")
        const result = num * 2;
        return result;
    }
}

const num = 10;
console.log("Enter a number: ", num);
let finalResult = evenOdd(num);
console.log("The Final output is ", finalResult)