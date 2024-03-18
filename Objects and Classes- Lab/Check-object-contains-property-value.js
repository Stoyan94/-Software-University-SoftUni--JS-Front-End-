let personInfo = {
    firstName: 'Stoyan',
    lastName: 'Stoyanov',
    age: '20',
}

//Checks if the property is contained, but 
//if the property itself has no value, it will not be found
if (personInfo['firstName']) {
    console.log('found');
}

let personInfo2 = {
    firstName: '',
    lastName: 'Stoyanov',
    age: '20',
}

//Checks if the property is contained, 
//and even if it doesn't have a value it will be found
if (personInfo2.hasOwnProperty('firstName')) {
    console.log('found');
}