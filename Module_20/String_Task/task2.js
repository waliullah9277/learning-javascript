// Task-2:
// Count how many times a string has the letter a or A
let professon = ["I am a student of green university of bangladesh,now I am currently studies in cse"];
let count = 0;
for(let letter of professon[0]){
    if(letter.toUpperCase() === "A"){
        count += 1;
    }
}
console.log(count);