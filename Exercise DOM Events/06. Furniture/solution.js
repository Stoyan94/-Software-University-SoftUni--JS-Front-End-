function solve() {
  const textAreaInputElement = document.querySelector('#exercise textarea:first-of-type');
  const textAreaOutputElement = document.querySelector('#exercise textarea:last-of-type');

  const generateButtonElement = document.querySelector('#exercise button:first-of-type');
  const buyButtonElement = document.querySelector('#exercise button:last-of-type');

  const furnitureTbodyElement = document.querySelector('.table tbody');

  generateButtonElement.addEventListener('click', (e) => {
    const furnitures = JSON.parse(textAreaInputElement.value);
    
    for (const furniture of furnitures) {
      const imageElement = document.createElement('img');
      imageElement.src = furniture.img;

      const imageTdElement = document.createElement('td');
      imageElement.appendChild(imageElement);

      const pNameElement = document.createElement('p');
      pNameElement.textContent = furniture.name;

      const tdNameElemant = document.createElement('td');
      tdNameElemant.appendChild(pNameElement);

      const pPriceElement = document.createElement('p');
      pPriceElement.textContent = furniture.price;

      const tdPriceElemant = document.createElement('td');
      tdPriceElemant.appendChild(pPriceElement);

      const pDecorElement = document.createElement('p');
      pDecorElement.textContent = furniture.decFactor;

      const tdDecorElemant = document.createElement('td');
      tdDecorElemant.appendChild(pDecorElement);

      const checkBoxElement = document.createElement('input');
      checkBoxElement.setAttribute('type', 'checkbox')

    }

  })

   
}