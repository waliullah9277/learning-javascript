/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
/*programming hero*/

for(let i=61; i<=100; i++){
    if(i % 2 === 1){
        console.log(`${i} is a odd number!`)
    }
}

console.log("------------------------------------------------------------")
console.log("*************************************************************")
console.log("------------------------------------------------------------")

for(let i=78; i<=98; i++){
    if(i % 2 === 0){
        console.log(`${i} is even number!`)
    }
}