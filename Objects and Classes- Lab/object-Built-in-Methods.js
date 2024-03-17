const cat = {
    name: 'Pile',
    breed: 'Flurkin',
    age: 323,
    placesLive: ['Earth', 'Mars', 'Space Ship'],
    owner: {
        name: 'Stoyan',
        age: 20,
    },
    //function expression value
    makeSound: function(){
        console.log('Arrr..Meao');
    },
    //arrow func
    sayName: () => console.log(`My names is ${cat.name}`),
}

//Get all props names of an obj...return array 
const propertyNames = Object.keys(cat);
console.log(propertyNames);

//Get all props values of an obj and again return array whit all of them
const propertyValues = Object.values(cat);
console.log(propertyValues);

//Get object key value pairs- return value like Dictionary in C#, 
//separated arrays,, every array contains the prop and value-- kvps
let person = {
    name: 'Pesho',
    lastName: 'Peshov'
}

const entries = Object.entries(person);
console.log(entries);

//Reverse entries---reverse entries to obj
const reversePersonEntries = Object.fromEntries(entries)
console.log(reversePersonEntries);