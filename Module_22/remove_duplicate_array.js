function duplicateArray(arr){
    let blankArr = [];
    for(let a of arr){
        if(blankArr.includes(a) === false){
            blankArr.push(a);
        }
    }
    return blankArr;
}




const arr = [2, 3, 4, 2, 3, 5];
const result = duplicateArray(arr);
console.log(result);