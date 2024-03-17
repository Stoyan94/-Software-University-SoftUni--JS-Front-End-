//Empty obj
let test = {};
console.log(typeof(test));

//Object with keys and value- keys are the property for a obj 
let person = {name: 'Stoyan', age: 20}
console.log(person);

//Use dot syntax to get property value
console.log(person.name);
console.log(person.age);

//Use bracket syntax to get property value, need to use ' ' 
let person2 = {name: 'Djuliq', age: 23}
console.log(person2['name']);
console.log(person2['age']);

//Dynamically add values
let animal = {};

//Add with dot syntax
animal.name = 'Pile';
console.log(animal);
//if the property "name" already exists, we'll just overwrite it

//Add with bracket syntax
animal['age'] = 5;
console.log(animal.age);

//Add dynamic name property
let propName = 'breed';
animal[propName] = 'Tiger';
console.log(animal);