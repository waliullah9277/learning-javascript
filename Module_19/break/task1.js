/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

for(let i=1; i<=200; i++){
    console.log(i);
    if(i == 100){
        break;
    }
}

console.log("--------------------------------------------")

let j = 1;
while(j <= 200){
    console.log(j);
    if(j == 100){
        break;
    }
    j++;
}