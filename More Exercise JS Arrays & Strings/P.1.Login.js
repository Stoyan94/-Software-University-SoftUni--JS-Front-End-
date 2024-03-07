function solve(passwordsInput) {
    let rightUserName = passwordsInput[0];    
    
    const reversePassword = reverseInput(passwordsInput.slice(1, passwordsInput.length));

    let countValidationsInput = 0;
    
    let isPasswordValid = validePassword(reversePassword, countValidationsInput, rightUserName);
    
    if (isPasswordValid) {
        return console.log(`User ${rightUserName} logged in.`);        
    }

    console.log(`User ${rightUserName} blocked!`);     
  
}

function validePassword(reversePassword, count, userName) {
    let maximumЕrrors = 4;

    let isNameInvalid = true;
 
     for (const currElement of reversePassword) {
        if (currElement !== userName) {

            count++;
            if (count === maximumЕrrors) {
                isNameInvalid = false;
                break; 
             } 
            console.log(`Incorrect password. Try again.`);
        } else {
            break;
        }          
        
     }

     if (!isNameInvalid) {
        return false;
    }
    return true;
   
}

function reverseInput(inputPass) {

    const reversedPassword = inputPass.toString()
    .split(',')
    .map(word => word.split('')
    .reverse()
    .join(''))
    .join(',');
    
    return reversedPassword.split(',');

}

solve(['Acer','login','go','let me in','recA'])
