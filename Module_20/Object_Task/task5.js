// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Output:


// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(let [key, value] of Object.entries(myObject)){
    let showKey = key;
    let showType = typeof value
    console.log(`Key: ${showKey} | type: ${showType}`)
}

