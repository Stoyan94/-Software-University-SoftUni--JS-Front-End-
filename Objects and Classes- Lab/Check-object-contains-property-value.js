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

if (personInfo2.hasOwnProperty('firstName')) {
    console.log('found');
}