function calculate (numOne, numTwo, operator) {
    const operations = [
        { operation: 'multiply', func: (a, b) => a * b },
        { operation: 'divide', func: (a, b) => a / b },
        { operation: 'add', func: (a, b) => a + b },
        { operation: 'subtract', func: (a, b) => a - b }
    ];

    const operationObject = operations.find(op => op.operation === operator);
    
    if (operationObject) {
        console.log(operationObject.func(numOne, numTwo));
    } else {
        console.log('Invalid operator');
    }
};

calculate(5, 5, 'multiply');


// The calculate function takes three parameters: numOne, numTwo, and operator.
// Inside the function, the find method is used on the operations array. 
//It searches for an object where the operation property matches the provided operator.
// If a matching object is found (operationObject is truthy), 
//it retrieves the corresponding function (func) from that object and calls it with the provided numOne and numTwo.
// If no matching object is found, it returns the string 'Invalid operator'.