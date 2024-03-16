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
    }
    
}

passwordValidator('Pa$s$s')