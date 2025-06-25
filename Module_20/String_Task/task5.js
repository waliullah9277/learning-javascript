// Task-5:
// Capitalize Every first Letter of each word in a String

let professon = ["I am a student of green university of bangladesh now I am currently studies in cse"];
let result = "";

for(let cap of professon){
    if(cap === " "){
        cap + 1.toUpperCase();
    }
    else{
        result += cap;
    }
}
console.log(result)