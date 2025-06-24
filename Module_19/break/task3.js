/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for(let i=10; i<=100; i++){
    let isSquare = false; 
    for(let j=1; j<=i; j++){
        if(j * j === i){
            isSquare = true;
            break;
        }
    }

    if(isSquare){
        console.log("First Square number found ", i)
        break;
    }
}




