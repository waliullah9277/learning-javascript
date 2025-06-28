// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function checkLongestWord(longestWord){
    let longest = longestWord.split(' ');
    let mx = '';
    for(let len of longest){
        if(len.length > mx.length){
            mx = len;
        }
    }
    return mx;
}

const longestWord = 'I am learning Programming to become a programmer'
const result = checkLongestWord(longestWord);
console.log(result);