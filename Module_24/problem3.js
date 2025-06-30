
function checkDigitsInName(name) {
    if(typeof name != 'string'){
        return "Invalid Input!"
    }
    for(let n of name){
        if(n >= '0' && n <= '9'){
            return true;
        }
    }
    return false
}

console.log(checkDigitsInName("wali123"))
console.log(checkDigitsInName("wali"))
console.log(checkDigitsInName(["wali"]))