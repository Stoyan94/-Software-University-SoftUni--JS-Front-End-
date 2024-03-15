function findEvenAndOddSum(digits) {

    const evenNums = digits.toString().split('')
    .filter(x => x % 2 ==0)
    .map(Number)
    .reduce((acc,digit) => acc + digit, 0);

    const oddNums = digits.toString().split('')
    .filter(x => x % 2 !==0)
    .map(Number)
    .reduce((acc,digit) => acc + digit, 0);

    console.log(` Odd sum = ${oddNums}, Even sum = ${evenNums}`);
    
}

findEvenAndOddSum(1000435);