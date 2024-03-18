const cat = {
    name: 'Pile',
    breed: 'Flurkin',
    age: 323,
    placesLive: ['Earth', 'Mars', 'Space Ship'],
    owner: {
        name: 'Stoyan',
        age: 20,
    },
    makeSound: function(){
        console.log('Arrr..Meao');
    },   
}

//normal way to check if the method exists
if (cat.makeSound) {
    console.log('found');
}

//Fancy way
cat.makeSound && cat.makeSound();

delete cat.makeSound;

if (!cat.makeSound) {
    console.log('deleted');
}