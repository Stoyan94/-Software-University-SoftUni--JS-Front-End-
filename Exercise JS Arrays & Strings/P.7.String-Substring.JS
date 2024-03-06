function solve(word, text) {

    const textSplit = text.toLowerCase().split(' ');    

    for (const currWord of textSplit) {
        
        if (currWord === word) {
            console.log(word);
            return;
        }       
    }

    console.log(`${word} not found!`);

}

function solve2(word, text) {

    const textSplit = text.toLowerCase().split(' ');
    
    let indexElement = textSplit.indexOf(word);

    if (indexElement >= 0) {
        console.log(word);
        return
    }
    console.log(`${word} not found!`);

}



solve2('javascript','JavaScript is the best programming language');
solve2('python','JavaScript is the best programming language');