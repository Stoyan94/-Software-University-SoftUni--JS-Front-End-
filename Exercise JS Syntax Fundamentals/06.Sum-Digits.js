function solve (num) {

    let numLeng = String(num);
    let sum = 0;

    for (let i = 0; i < numLeng.length; i++) {
        sum += Number(numLeng[i]);
        
    }

    console.log(sum);
}

solve (245678);