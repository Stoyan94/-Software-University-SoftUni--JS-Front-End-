function attachEvents(params) {
    const inputTitleElement = document.querySelector('input[type=text][name=title]');  
    const inputAuthorElement = document.querySelector('input[type=text][name=author]');

    const submitButtonElement = document.getElementById('form').querySelector('button');
    const trBooksElements = document.getElementById('books').querySelector('tbody');
    

    submitButtonElement.addEventListener('click', () =>{
        const tdInputTitleElement = document.createElement('td');
        tdInputTitleElement.textContent = inputTitleElement.value

        const tdInputAuthorElemet = document.createElement('td');
        tdInputAuthorElemet.textContent = inputAuthorElement.value;

        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        
        const deleteButton = document.createElement('button')  
        deleteButton.textContent = 'Delete'; 
        
        const buttonsTrElemet = document.createElement('td');
        buttonsTrElemet.appendChild(editButton)
        buttonsTrElemet.appendChild(deleteButton);

        const trInputsElement = document.createElement('tr');
        trInputsElement.appendChild(tdInputTitleElement);
        trInputsElement.appendChild(tdInputAuthorElemet);
        trInputsElement.appendChild(buttonsTrElemet)

        trBooksElements.appendChild(trInputsElement);        

        inputTitleElement.value = '';
        inputAuthorElement.value = '';
    })
}

attachEvents();