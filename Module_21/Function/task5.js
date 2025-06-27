// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const num = 6;
const result = odd_even(num);
if(result === true){
    console.log(num, " is even number!")
}
else{
    console.log(num, " is odd number!")
}
