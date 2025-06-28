// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(temperature){
    // (2°C × 9/5) + 32 = 35.6°F

    let far = (temperature * 9/5) + 32;
    return far;
}

const temperature = 2;
const result = celsiusToFahrenheit(temperature);
console.log(result);
