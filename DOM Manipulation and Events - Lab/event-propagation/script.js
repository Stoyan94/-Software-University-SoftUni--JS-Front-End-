const orangeElement = document.querySelector('.orange')
const greenElement = document.querySelector('.green')
const yellowElement = document.querySelector('.yellow')

orangeElement.addEventListener('click', () => {
    console.log('Orange clicked');
})

greenElement.addEventListener('click', () => {
    console.log('Green clicked');
})

yellowElement.addEventListener('click', () => {
    console.log('Yellow clicked');
})