// Task-5:
// Capitalize Every first Letter of each word in a String

let professon = "I am a student of green university of bangladesh now I am currently studies in cse";
let word = professon.split(" ");
let capitalizeWords = [];

for(let cap of word){
    let capitalizedFirstWord = cap[0].toUpperCase() + cap.slice(1);
    capitalizeWords.push(capitalizedFirstWord);
    // console.log(capitalizedFirstWord)
}

let result = capitalizeWords.join(" ");
console.log(result);
