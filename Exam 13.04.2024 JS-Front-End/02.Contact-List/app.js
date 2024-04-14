window.addEventListener("load", solve);

function solve() {
    const addButtonEl = document.getElementById('add-btn');
    const nameInputEl = document.getElementById(`name`);
    const phoneNumberInputEl = document.getElementById(`phone`);
    const categoryInputEl = document.getElementById(`category`);

    const checkListEl = document.getElementById('check-list');

    const contactListEl = document.getElementById('contact-list');

    addButtonEl.addEventListener('click', () => {
      // pragraphs
      const namePrElement = document.createElement('p');
      namePrElement.textContent = `name:${nameInputEl.value}`;
      
      const phoneNumberPrElement = document.createElement('p');
      phoneNumberPrElement.textContent = `phone:${phoneNumberInputEl.value}`;
      
      const categoryPrElement = document.createElement('p');
      categoryPrElement.textContent = `category:${categoryInputEl.value}`;
      // article
      const articleEl = document.createElement('article');
      articleEl.appendChild(namePrElement);
      articleEl.appendChild(phoneNumberPrElement);
      articleEl.appendChild(categoryPrElement);      
      // liEl
      const liElInputs = document.createElement('li');
      liElInputs.appendChild(articleEl);
      //buttons
      const buttonEdit = document.createElement('button');
      buttonEdit.classList.add('edit-btn');

      const buttonSave = document.createElement('button');
      buttonSave.classList.add('save-btn');
      // divButtons
      const divElButtons = document.createElement('div');
      divElButtons.classList.add('buttons');
      divElButtons.appendChild(buttonEdit);
      divElButtons.appendChild(buttonSave);
      // chekList Append
      checkListEl.appendChild(liElInputs);
      checkListEl.appendChild(divElButtons);

      nameInputEl.value = '';
      phoneNumberInputEl.value = '';
      const storeCategory = categoryInputEl.value;
      categoryInputEl.value = '';
      
      buttonEdit.addEventListener('click', () => {
        
        checkListEl.innerHTML = '';
        const nameSubstirng = namePrElement.textContent.substring(5);
        const phoneSubstring = phoneNumberPrElement.textContent.substring(6);       

        nameInputEl.value = nameSubstirng;
        phoneNumberInputEl.value = phoneSubstring;
        categoryInputEl.value = storeCategory;

      });

      buttonSave.addEventListener('click', () => {
        divElButtons.remove();

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('del-btn');
        liElInputs.appendChild(buttonDelete);

        contactListEl.appendChild(liElInputs);
        
        console.log(divElButtons);


        buttonDelete.addEventListener('click', () => {
          liElInputs.remove();
        })
      });     
      
    })
    
  }
  