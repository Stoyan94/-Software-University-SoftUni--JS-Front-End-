function solve (text) {

    let splitText = text.split(' ');    
  
    let isThereNum = false;
    
    const asiiCodeNumberForDigit = 57;

    for (const currWord of splitText) {

       const elementLenght = currWord.length;

       if (currWord.startsWith('#') && elementLenght > 1) {

        let subString = currWord.substring(1, currWord.length)
        
         for (const curChar of subString) {
            const asciiCode  = curChar.charCodeAt(0);

            if ( asiiCodeNumberForDigit - asciiCode > 0) {
                isThereNum = true;
                break;
            }          
            
         }

         if (isThereNum) {
            isThereNum = false;
            continue;            
         }
         

         console.log(subString);
       }  
       
    } 

}

solve('Nowadays everyone uses # to tag a #1special word in #socialMedia');
