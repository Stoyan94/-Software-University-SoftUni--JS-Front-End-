function solve(num1, num2, action) {

    let a ;

    switch (action){
        case '+':  a = num1 + num2; console.log(a); break;
        case '-':  a = num1 - num2; console.log(a); break;
        case '*':  a = num1 * num2; console.log(a); break;
        case '/':  a = num1 / num2; console.log(a); break;
        case '%':  a = num1 % num2; console.log(a); break;
        case '**':  a = num1 ** num2; console.log(a); break;
    }
  
}
