// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg(arr){
    let avg_sum = 0;
    let size = arr.length;
    for(let a of arr){
        avg_sum += a;
    }
    console.log("Size this array is ", size);
    let avg = avg_sum/size
    return avg;
}

const arr = [3, 4, 6, 3, 5, 3]
const avg = makeAvg(arr);
console.log("The Average of the array is ", avg);
