function convertObjToJSON(...params) {
    let person = {};
    person.name = params[0];
    person.lastName = params[1];
    person.hairColor = params[2];

    const convertObj = JSON.stringify(person);
    console.log(convertObj);
}

convertObjToJSON('George', 'Jones', 'Brown');