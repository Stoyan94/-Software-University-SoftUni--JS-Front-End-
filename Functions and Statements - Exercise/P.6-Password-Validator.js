function passwordValidator(password) {
    const IslenghtValid = password =>password.length >= 6 && password.length <= 10;
    const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;    

    const print = validatePassword(password);

    function validatePassword(password) {
        let isValid = true;

        if (!IslenghtValid(password)) {
            isValid = false;
            console.log('Password must be between 6 and 10 characters');
        }

        if (!isStrong(password)) {
            isValid = false;
            console.log('Password must have at least 2 digits');
        }
        
        if (isValid) {
            console.log('Password is valid');
        }
    }
}

passwordValidator('Pa$s$s')