let person = {
    name: 'Pesho',
    age: 20,
}
let person2 = {
    name: 'Pesho',
    age: 20,
}


//Convert JS object to JSON
const data = JSON.stringify(person);
console.log(data); // Return only string 

// For better looking format we can add more space 
const data2 = JSON.stringify(person2, null, 2);
console.log(data2);

// Convert from JSON to JS-obj
const originalObject = JSON.parse(data)
console.log(originalObject);