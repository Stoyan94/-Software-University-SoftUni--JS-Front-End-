// Creates a new array with the results of calling a
// provided function on every element in the
// calling array

let numbers = [1, 4, 9];
let roots = numbers.map(function(num, i, arr) {
return Math.sqrt(num)
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

//Whit arrow func

let multiplication = numbers.map(num => num * 2);

console.log(multiplication);