function create(words) {
   const contentElement = document.getElementById('content')

   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';
         
         const divElement = document.createElement('div');
         divElement.appendChild(pElement);      
         return divElement;
      });


   //  divElements
   //     .forEach(divElement => {
   //        divElement.addEventListener('click', () => {
   //           const pElement = divElement.querySelector('p').style.display = 'block';
   //     })
   //  });
    
   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divElementsFragment.appendChild(divElement))
    
   contentElement.appendChild(divElementsFragment)
   // Attach "multiple" event using event delegation
    contentElement.addEventListener('click', (e) => {
      if (e.target.tagName === 'DIV') {
         const pElement = e.target.querySelector('p').style.display = 'block';
      }
    })

}