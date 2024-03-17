function person(...personInputInfo) {
    let person = {};
    
    person.firstName = personInputInfo[0];
    person.lastName = personInputInfo[1];
    person.age = personInputInfo[2];
    
    return person;
}

person("Peter","Pan","20")