function solve() { 
    const inputNumbrElement = document.getElementById('input');  
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const resultElement = document.getElementById('result');
    const convertButtonElement = document.querySelector('button');
   
    // Populate select menu to with options
    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';    
    binaryOptionElement.textContent = 'Binary';
    
    const hexaDecimalOptionElement = document.createElement('option');
    hexaDecimalOptionElement.value = 'hexadecimal';
    hexaDecimalOptionElement.textContent = 'Hexadicmal';
    selectMenuToElement.appendChild(hexaDecimalOptionElement);    
    
    const convertors = {
        binary: convertDecimalToBinary,
    }

    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumbrElement.value)
        resultElement.value = convertors[selectMenuToElement.value](numberValue);
    })    

    function convertDecimalToBinary(number) {
        const result = [];
        while (number > 0) {
            result.push(number % 2)
            number = Math.trunc(number / 2);
        }

        return result.reverse().join('')
    }

    function converDecimalToHex(number) {
        
    }
}