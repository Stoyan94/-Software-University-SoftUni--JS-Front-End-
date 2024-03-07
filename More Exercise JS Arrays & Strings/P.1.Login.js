function solve(passwordsInput) {
    let userName = passwordsInput[0];    
    
    const reversePassword = reverseInput(passwordsInput.slice(1, passwordsInput.length));

    let count = 0;
    
    let isPasswordValid = validePassword(reversePassword, count, userName);
    
    if (isPasswordValid) {
        return console.log(`User ${userName} logged in.`);        
    }

    console.log(`User ${userName} blocked!`);     
  
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
