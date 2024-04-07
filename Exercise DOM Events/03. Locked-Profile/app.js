function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');
    
    for (const profileElement of profileElements) {
        const showButtonElement = profileElement.querySelector('button');
        const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]')

        showButtonElement.addEventListener('click', (e) => {
            if (lockRadioElement.checked) {
                return;
            }
            
            const additionInformationElement = showButtonElement.previousElementSibling;
            additionInformationElement.style.display = 'block'
        })
    }

}