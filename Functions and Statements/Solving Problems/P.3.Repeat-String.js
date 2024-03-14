function solve(stringToRepeat, countRepeats) {
    const lettersRepeat = repeatInput(stringToRepeat, countRepeats)
    
    function repeatInput(stringToRepeat, countRepeats) {
        return stringToRepeat.repeat(countRepeats)
    }
    
    console.log(lettersRepeat);
}


solve("abc", 3)