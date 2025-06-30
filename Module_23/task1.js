// Task -1:
// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];
let mn = heights2[0];
for(let height of heights2){
    if(mn > height){
        mn = height
    }
}
console.log(mn)


