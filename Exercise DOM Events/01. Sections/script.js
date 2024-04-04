function create(words) {
   const contentElement = document.getElementById('content')

   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';
         
         const divElement = document.createElement('div');
         divElement.appendChild(pElement);

         // divElement.addEventListener('click', () => {
         //    pElement.style.display = 'block'
         // })

         return divElement;
      });


    divElements
       .forEach(divElement => {
          divElement.addEventListener('click', () => {
             const pElement = divElement.querySelector('p').style.display = 'block';
       })
    });

    // Better solution, but append doesn't work in Judge
   //  contentElement.append(...divElements)   

   // divElements.forEach(divElement => contentElement.appendChild(divElement))

   // Best solution
   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divElementsFragment.appendChild(divElement))
   
   contentElement.appendChild(divElementsFragment)
}