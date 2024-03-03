// Searching for Substrings
// indexOf(substr)

let str = "I am JavaScript developer";
console.log(str.indexOf("Java")); // Expected output: 5
console.log(str.indexOf("java")); // Expected output: -1

// lastIndexOf(substr)

let str2 = "Intro to programming";
let last = str2.lastIndexOf("o");
console.log(last); // Expected output: 11


//Extracting Substrings

let str3 = "I am JavaScript developer";
let sub = str3.substring(5, 10);
console.log(sub); // Expected output: JavaS


function solve(text, startIndex, count) {
    let substring = text.substring(startIndex, startIndex + count);
    console.log(substring); 
}

solve("ASentence", 1, 8 )