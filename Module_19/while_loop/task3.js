/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
/*programming hero*/

let sumOdd = 0;
let i = 91;
while(i <= 129){
    if(i % 2 === 1){
        sumOdd += i;
        console.log(`${i} odd number!`)
    }
    i++;
}
console.log("Total sum of 91 to 129 odd number is ",sumOdd)

console.log("------------------------------------------------------------")
console.log("*************************************************************")
console.log("------------------------------------------------------------")

let sumEven = 0;
let j = 51;
while(j <= 85){
    if(j % 2 === 0){
        sumEven += j;
        console.log(`${j} even number!`)
    }
    j++;
}
console.log("Total sum of 51 to 85 even number is ",sumEven)
