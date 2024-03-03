// ▪ Returns the first found value in the array, if an
// element in the array satisfies the provided testing
// function or undefined if not found

let array1 = [5, 12, 8, 130, 44];
let found = array1.find(function(element) {
return element > 10;
});
console.log(found); // 12

//With arrow func

let bigestNum = array1.find(num => num > 53);

console.log(bigestNum);
