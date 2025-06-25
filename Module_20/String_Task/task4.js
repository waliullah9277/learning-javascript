// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.


// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let example = "newxtrem"
console.log(example)
let result = "";
for(let ex of example){
    if(ex.toLowerCase() === 'x'){
        result += 'y';
    }
    else{
        result += ex;
    }
}
console.log(result)