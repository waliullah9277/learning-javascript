// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function countNumbers(number, target){
    let count = 0;
    for(let num of number){
        if(num === target){
            count++;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98, 5];
const result = countNumbers(numbers, 25);
console.log(result);

// function countNumber(num){
//     let countArr = {};
//     for(let item of num){
//         if(countArr[item]){
//             countArr[item]++;
//         }
//         else{
//             countArr[item] = 1;
//         }
//     }
//     return countArr;
// }


// const num = [2, 3, 4, 2, 4, 2, 5, 6, 7];
// const result = countNumber(num);
// console.log(result);