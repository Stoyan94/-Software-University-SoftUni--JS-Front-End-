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

            if (showButtonElement.textContent === 'Show more') {
                showButtonElement.textContent = 'Hide it'
                additionInformationElement.style.display = 'block';
            } else {
                showButtonElement.textContent = 'Show more'
                additionInformationElement.style.display = 'none';
            }
        })
    }

}