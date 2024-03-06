function solve(text) {

    let words = '';

    let isNextWord = false;
    
    for (const currWord of text) {
        
        if (currWord === currWord.toUpperCase()) {
            
            if (isNextWord) {
                words += ', ';
                isNextWord = false;
            }
            
            words += currWord
            isNextWord = true;
        }
        else {

            

            words += currWord;
        }
    }

    console.log(words);

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')