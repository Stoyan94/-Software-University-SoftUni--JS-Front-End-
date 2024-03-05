function solve (text) {

    let splitText = text.split(' ');    
  
    
    for (const currWord of splitText) {

       const elementLenght = currWord.length;
        
        if (currWord.startsWith('#') && elementLenght > 1 && !currWord.includes(Number)) {
            let subString = currWord.substring(1, currWord.length)
            console.log(subString);

            
        }    
        
    } 

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('')