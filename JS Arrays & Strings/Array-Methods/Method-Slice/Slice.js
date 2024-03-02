// The slice() method returns a shallow copy of a
// portion of an array into a new array object selected
// from begin to end (end not included)
// ▪ The original array will not be modified

//Shallow copy is new arr with new reference and its not the same arr

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple'];
let citrus = fruits.slice(1, 3);
let fruitsCopy = fruits.slice();
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple']
// citrus contains ['Orange', 'Lemon']