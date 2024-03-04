function solve(array) {
    // Sort the array in ascending order
    array.sort((a, b) => a - b);  
   
    let result = [];
    let arrLenght = array.length;
    
    for (let i = 0; i < arrLenght; i++) {
        if (i % 2 === 0) {
            result.push(array.shift())
        }
        else {
            result.push(array.pop());
        }        
       
    }
      
    return result; 
  }

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])