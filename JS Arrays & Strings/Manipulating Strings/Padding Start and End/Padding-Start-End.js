// Use padStart() to add to the current string another substring at
// the start until a length is reached

let text = "010";          
console.log(text.padStart(8, '0')); // Expected output: 00000010
                         // ^                        
                        //Receives length and substri

// Use padEnd() to add to the current string another substring at
// the end until a length is reached

let sentence = "He passed away";
console.log(sentence.padEnd(20, '.'));
// Expected output: He passed away......