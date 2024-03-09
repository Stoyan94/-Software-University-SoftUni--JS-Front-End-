function solve(num, pow) {
    let numPow = Math.pow(num, pow);

    console.log(numPow);
}

function solve2(num, pow) {

    const numPow = (a,b) => a ** b; 

    let result = numPow(num, pow);

    console.log(result);
}

solve2(2,8)