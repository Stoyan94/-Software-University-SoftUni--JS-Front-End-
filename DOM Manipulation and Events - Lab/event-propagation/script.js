const orangeElement = document.querySelector('.orange')
const greenElement = document.querySelector('.green')
const yellowElement = document.querySelector('.yellow')

orangeElement.addEventListener('click', () => {
    console.log('Orange clicked');
}, {capture: true})

greenElement.addEventListener('click', () => {
    console.log('Green clicked');
    
}, {capture: false})

yellowElement.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Yellow clicked');
})