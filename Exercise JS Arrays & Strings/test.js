function solve( char1, char2) {

    let firstChar = char1.charCodeAt(0);
    let seckondChar = char2.charCodeAt(0);

    let end;
    let start;

    if (firstChar > seckondChar) {
        
        end = firstChar;
        start = seckondChar

    }
    else {
        end = seckondChar
        start = firstChar
    }

   
    
    let result = '';
    for (let i = start + 1; i < end; i++) {
    
    result += String.fromCharCode(i) + ' ';
    
    } 
    
    
   
    console.log(result);
    
}


solve('a','d')
solve('#',':')

