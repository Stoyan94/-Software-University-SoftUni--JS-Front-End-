function calc() {
    const firstInputElement = document.getElementById('num1')
    const seckondInputElement = document.getElementById('num2')
    const sumInputElemet = document.querySelector('#sum')

    const firstNumber = Number(firstInputElement.value);
    const seckondNumber = Number(seckondInputElement.value)

    sumInputElemet.value = firstNumber + seckondNumber;
}
