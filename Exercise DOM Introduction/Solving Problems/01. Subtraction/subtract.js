function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberNumberElement = document.getElementById('secondNumber');
    const resultEelemt = document.getElementById('result');

    resultEelemt.textContent = Number(firstNumberElement.value) - Number(secondNumberNumberElement.value);
}