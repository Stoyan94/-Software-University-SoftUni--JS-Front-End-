function sovle(num) {

    let numLeng = num.toString();
    let curDigit = numLeng[0];
    let sum = Number(curDigit);
    let isSame = true;

    for (let i = 1; i < numLeng.length; i++) {
        
        if (curDigit !== numLeng[i]) {
            isSame = false;
        }

        curDigit = numLeng[i];

        sum += Number(curDigit);
    }

    console.log(isSame);
    console.log(sum);

}

sovle(2222222)

