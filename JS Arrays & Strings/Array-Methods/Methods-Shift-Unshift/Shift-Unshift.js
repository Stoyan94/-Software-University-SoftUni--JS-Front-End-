// The shift() method removes the first element
// from an array and returns that removed element
// ▪ This method changes the length of the array

let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.length); // 7
console.log(nums.shift()); // 10 (removed element)
console.log(nums); // [ 20, 30, 40, 50, 60, 70 ]


// Unshift
let nums2 = [40, 50, 60];
console.log(nums2.length); // 3
console.log(nums2.unshift(30)); // 4 (nums.length)
console.log(nums2.unshift(10,20)); // 6 (nums.length)
console.log(nums2); // [ 10, 20, 30, 40, 50, 60 ]