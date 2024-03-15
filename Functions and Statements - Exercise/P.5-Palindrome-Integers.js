function palindromeNumbers(numbers) {    
    for (const number of numbers) {
        const currNum = number.toString().split('')
        .reverse()
        .join('');

        if (number.toString() === currNum) {
            console.log(true);
        } else {
            console.log(false);
        }        
    }
}

palindromeNumbers([123,323,421,121]);
palindromeNumbers([32,2,232,1010]);