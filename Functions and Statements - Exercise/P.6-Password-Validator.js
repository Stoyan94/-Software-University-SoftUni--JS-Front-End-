function passwordValidator(password) {
    const IslenghtValid = password =>password.length >= 6 && password.length <= 10;
    const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;    

    console.log(validatePassword(password));

    function validatePassword(password) {
        let isValid = true;

        if (!IslenghtValid(password)) {
            console.log('Password must be between 6 and 10 characters');
        }

        if (!isStrong(password)) {
            console.log('Password must have at least 2 digits');
        }
        
        if (isValid) {
            console.log('Password is valid');
        }
    }
}

passwordValidator('Pa$s$s')