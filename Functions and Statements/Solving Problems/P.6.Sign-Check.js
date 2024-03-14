function checkSign(num1, num2, num3) {
    const calculateFirstSum = (a,b) => a * b;
    const calculateLastSum = calculateFirstSum(num1, num2) * num3;
    
    const isPositiveOrNegative = calculateLastSum > 0 ? true : calculateLastSum < 0 ? false : null;

    if (isPositiveOrNegative) {
       return console.log('Positive');
    }
    console.log('Negative');    
}


checkSign( 5, 12, -15 )

checkSign(-6, -12, 14 )