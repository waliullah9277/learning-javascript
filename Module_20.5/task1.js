// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// Input: 
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// const reversedArray = colors.reverse()

// console.log(reversedArray)

let reversedArray = []

for(let i = colors.length - 1; i>=0; i--){
    reversedArray.push(colors[i])
    // console.log(colors[i])
}
console.log(reversedArray)

