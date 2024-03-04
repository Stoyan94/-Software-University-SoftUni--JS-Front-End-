function solve (words, text) {

    let allWords = words.split(', ');

    let firstIndexWordReplace = text.indexOf('*');

    while (firstIndexWordReplace > 0) {
        
        let wordLengh = '';

        for (let i = firstIndexWordReplace; i < text.length; i++) {
            if (text[i] !== '*') {                
                break;
            }

            wordLengh += text[i];            
        }
        
        for (const currWord of allWords) {
            
            if (currWord.length === wordLengh.length) {
                text = text.replace(wordLengh, currWord);
                break;
            }
        }

        firstIndexWordReplace = text.indexOf('*');
       
    }

    console.log(text);

}

solve ('great, learning','softuni is ***** place for ******** new programming languages');