const cat = {
    name: 'Pile',
    breed: 'Flurkin',
    age: 323,
    placesLive: ['Earth', 'Mars', 'Space Ship'],
    owner: {
        name: 'Stoyan',
        age: 20,
    },
    //function expression value
    makeSound: function(){
        console.log('Arrr..Meao');
    },
    //arrow func
    sayName: () => console.log(`My names is ${cat.name}`)
}
console.log(cat);

cat.sayName();


//Function added to object is called - method
cat.makeSound();

//Add method dynamically
cat.eat = function(){
    console.log('Give me more...meao');
}
//With arrow func
cat.sleep = () => console.log('zzzz...');

cat.eat();
cat.sleep();

