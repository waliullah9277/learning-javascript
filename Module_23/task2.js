// Task -2:
// Find the friend with the smallest name.

function smallName(height){
    let sm = height[0];
    for(let h of height){
        if(sm.length > h.length){
            sm = h;
        }
    }
    return sm
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let result = smallName(heights2);
console.log(result);
