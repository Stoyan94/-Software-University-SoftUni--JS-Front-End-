function reverseInput(inputPass) {

    const reversedPassword = inputPass.toString()
    .split(',')
    .map(word => word.split('')
    .reverse()
    .join(''))
    .join(' ');    

}

function solve(passwordsInput) {
    let userName = passwordsInput[0].split('').reverse().join('');

    const reversePassword = reverseInput(passwordsInput);

}

solve(['Acer','login','go','let me in','recA']);