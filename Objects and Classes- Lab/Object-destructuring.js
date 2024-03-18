let person = {
    name: 'Pesho',
    lastName: 'Peshov'
}

const {name, lastName} = person;
console.log(name);
console.log(lastName);

//if we use a variable with the same name somewhere in the code, 
//we won't be able to use the same name in destructuring obj syntax,
// and need to rename the variable in destructuring syntax
const {name: newName, lastName: newLast} = person
console.log(newName);
console.log(newLast);

// Whith rest operator s
let cat = {
    breed: 'Iso',
    age: 3,
    town: 'DulgoPol',
}

const {breed, ...restInfoCat} = cat;

console.log(breed);
console.log(restInfoCat);
