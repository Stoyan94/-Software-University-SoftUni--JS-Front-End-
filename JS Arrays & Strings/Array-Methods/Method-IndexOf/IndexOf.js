// The indexOf() method returns the first index at
// which a given element can be found in the array
// ▪ Output is -1 if element is not present

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
// start from index 2
console.log(beasts.indexOf('bison', 2)); // 4
console.log(beasts.indexOf('giraffe')); // -1


const beasts2 = ['ant', 'bison', 'camel', 'duck', 'bison', 'lion', 'tiger', 'bison'];

let countBion = 0;

let firstIndexBison = beasts2.indexOf('bison')

let findAllIndicesBison = [];
findAllIndicesBison.push(firstIndexBison)

while (firstIndexBison >= 0) {
    
    firstIndexBison = beasts2.indexOf('bison', firstIndexBison +1);

    if (firstIndexBison !== -1) {
        findAllIndicesBison.push(firstIndexBison);
    }
    
}

console.log(findAllIndicesBison);

