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
for(let i=91; i<=129; i++){
    if(i % 2 === 1){
        sumOdd += i;
        console.log(`${i} odd number!`)
    }
}
console.log("Total sum of 91 to 129 odd number is ",sumOdd)

console.log("------------------------------------------------------------")
console.log("*************************************************************")
console.log("------------------------------------------------------------")

let sumEven = 0;
for(let i=51; i<=85; i++){
    if(i % 2 === 0){
        sumEven += i;
        console.log(`${i} even number!`)
    }
}
console.log("Total sum of 51 to 85 even number is ",sumEven)
