
function  waitingTime(waitingTimes  , serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }

    let total = 0;
    for(let wt of waitingTimes){
        total+=wt;
    }
    const avgWT = Math.round(total / waitingTimes.length);
    const upcomingSerial = serialNumber - 1;
    const vivaLeft = upcomingSerial - waitingTimes.length;
    if(vivaLeft <= 0) return 0;
    const waitingTime = vivaLeft * avgWT;
    return waitingTime;
}

console.log(waitingTime([3,5,7,11,6], 10)); // 24
console.log(waitingTime([13, 2], 6)); // 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); // 0
console.log(waitingTime([6], 4)); // 12
console.log(waitingTime(7 , 10)); // Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Invalid Input
console.log(waitingTime("[6,2]", 9)); // Invalid Input



