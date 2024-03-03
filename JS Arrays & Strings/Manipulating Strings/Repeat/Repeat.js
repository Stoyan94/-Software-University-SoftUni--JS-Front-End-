
let n = 3;
for(let i = 1; i <= n; i++) {
console.log('*'.repeat(i));
}

// *
// **
// ***

function solve(text, word) {

    while (text.includes(word)) {

     text = text.replace(word, '*'.repeat(word.length));

    }
    console.log(text);    
 
}

solve('A small sentence with some words, small', 'small')