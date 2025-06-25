// Task-1:
// Count how many times a string has the letter a

let professon = ["I am a student of green university of bangladesh,now I am currently studies in cse"];
let count = 0;
for(let letter of professon[0]){
    if(letter.toLowerCase() === "a"){
        count += 1;
    }
}
console.log(count);

