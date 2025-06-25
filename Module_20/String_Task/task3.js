// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

let professon = ["I am a student of green university of bangladesh now I am currently studies in cse"];
let vowelsCount = 0;
for(let letter of professon[0]){
    if(letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() ==="u"){
        vowelsCount += 1;
    }
}
console.log(vowelsCount);