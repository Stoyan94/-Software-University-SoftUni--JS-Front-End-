function passwordValidator(password) {
    const IslenghtValid = password =>password.length >= 6 && password.length <= 10;
    //const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password); with regex
    const isAlphaNumerical = checkPassword(password);    
    const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;    

    validatePassword(password);

    function validatePassword(password) {
        let isValid = true;

        if (!IslenghtValid(password)) {
            isValid = false;
            console.log('Password must be between 6 and 10 characters');
        }

        if (!isAlphaNumerical) {
            isValid = false;
            console.log('Password must consist only of letters and digits');
        }

        if (!isStrong(password)) {
            isValid = false;
            console.log('Password must have at least 2 digits');
        }
        
        if (isValid) {
            console.log('Password is valid');
        }
    }

    function checkPassword(password) {
        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            if (!((char >= 'a' && char <= 'z') ||
                  (char >= 'A' && char <= 'Z') ||
                  (char >= '0' && char <= '9'))) {
                return false;
            }
        }
        return true;

     //We iterate over each character in the password using a for loop.
     // For each character, we check if it falls within the range of lowercase letters ('a' to 'z'), uppercase letters ('A' to 'Z'), or digits ('0' to '9').
     // If a character is found that is not alphanumeric, we return false.
     // If all characters pass the alphanumeric check, we return true.
    }
    
}

function passwordValidatorFancySolve(password) {
    const IslenghtValid = password =>password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = checkPassword(password);    
    const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;  
    
    const validations =[
        [IslenghtValid, 'Password must be between 6 and 10 characters'],
        [checkPassword, 'Password must consist only of letters and digits'],
        [isStrong, 'Password must have at least 2 digits'],
    ];

    function checkPassword(password) {
        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            if (!((char >= 'a' && char <= 'z') ||
                  (char >= 'A' && char <= 'Z') ||
                  (char >= '0' && char <= '9'))) {
                return false;
            }
        }
        return true;
    }

    
    const checkForErrors =  validations
    .map(([validator, message]) => validator(password) ? '' : message)
    .filter(message => !!message);
    
    if (checkForErrors.length === 0) {
        return 'Password is valid';        
    }

    checkForErrors.forEach(message => console.log(message))
}


 passwordValidatorFancySolve('Pa$s$s')
 passwordValidatorFancySolve('logIn')