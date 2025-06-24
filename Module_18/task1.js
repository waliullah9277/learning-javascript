/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 500;
if(burgerPrice >= 500){
    console.log("you can free a coke. And you can pay ", burgerPrice);
}else{
    const coke = 30;
    const youCanPay = burgerPrice + coke;
    console.log("you can buy a coke additional 30 tk. and your total pay amount is ", youCanPay);
}