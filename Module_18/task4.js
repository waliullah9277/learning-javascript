/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const marks = 78
if(marks >= 80){
    const friendMarks = 34
    if(friendMarks >= 80){
        console.log("Then go for lunch!")
    }
    else if(friendMarks < 80 && friendMarks >= 60){
        console.log("Good luck next time!")
    }
    else if(friendMarks < 60 && friendMarks >= 40){
        console.log("Keep your friend's message unseen!")
    }
    else if(friendMarks < 40){
        console.log("Block your friend!")
    }
}
else{
    console.log("Go to home and sleep and act sad!")
}