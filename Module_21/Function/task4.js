// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(binaryStr){
    let count = 0;
    for(let binary of binaryStr){
        if(binary === "0"){
            count += 1;
        }
    }
    return count;
}

const binary_string = "010001011101100"
const zero = countZero(binary_string);
console.log("The total 0 is ", zero);