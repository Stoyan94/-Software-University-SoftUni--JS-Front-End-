// ▪ Creates a new array with filtered elements only
// ▪ Calls a provided callback function once for each element
// in an array
// ▪ Does not mutate the array on which it is called

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// Filter array items based on search criteria (query)

function filterItems(arr, query) {
return arr.filter(function(el) {
return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;});
};

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']

//With arrow func

let filterItems2 = fruits.filter(text => text.includes('ap'))

console.log(filterItems2);