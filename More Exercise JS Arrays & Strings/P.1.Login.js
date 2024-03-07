function solve(passwordsInput) {
    let userName = passwordsInput[0]

    const reversePassword = reverseInput(passwordsInput);

    let count = 0;
    
    let isPasswordValid = validePassword(reversePassword, count, userName);
    
    if (isPasswordValid) {
        return console.log(`User ${userName} logged in.`);        
    }

    console.log(`User ${username} blocked!`); 
  
}

function validePassword(reversePassword, count, userName) { 
    
    let reversePasswordLength = reversePassword.length;
 
     for (const currElement of reversePassword) {
        if (currElement !== userName) {

            console.log(`Incorrect password. Try again.`);
            count++;
        }

      
    
     }

     if (count === reversePasswordLength) {
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

solve(['Acer','login','go','let me in','recA']);