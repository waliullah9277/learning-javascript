// Task-3:
// Write a function to count the number of vowels in a string.

function countVowels(str){
    let vowel = 'AEIOUaeiou';
    let count = 0;
    for(let v of str){
        // console.log(v)
        if(vowel.includes(v)){
            count++;
        }
    }
    return count;
}

const str = 'Hello Bangladesh Union'
const result = countVowels(str);
console.log(result)