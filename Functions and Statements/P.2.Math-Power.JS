function solve(num, pow) {
    let numPow = Math.pow(num, pow);

    console.log(numPow);
}

function solve2(num, pow) {

    const customPow = (a,b) => a ** b; 

    let result = customPow(num, pow);

    console.log(result);
}

solve2(2,8)