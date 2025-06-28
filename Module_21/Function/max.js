const arr = [4, 3,22,44,3,2,4]
let mx = arr[0];
let mn = arr[0];
for(let a of arr){
    if(mx < a){
        mx = a;
    }
    else if(mn > a){
        mn = a;
    }
}
console.log(mx);
console.log(mn);