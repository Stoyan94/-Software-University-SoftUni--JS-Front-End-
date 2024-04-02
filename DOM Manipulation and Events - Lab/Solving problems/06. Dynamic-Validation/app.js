function validate() {
    const emailInputElement = document.getElementById('email')
    const patenr = /^[a-z]+@[a-z]+\.[a-z]+/

    emailInputElement.addEventListener('change', (event) => {
        if (!patenr.test(event.target.value)) {
            event.target.classList.add('error')
        } else{
            event.target.classList.remove('error')
        }
    })
}