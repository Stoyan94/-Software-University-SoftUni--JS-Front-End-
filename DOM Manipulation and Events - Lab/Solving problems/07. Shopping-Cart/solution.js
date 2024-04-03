function solve() {
   const addProductButtonElements = document.querySelectorAll('button.add-product')
   const textareaElement = document.querySelector('textarea')

   for (const buttonElement of addProductButtonElements) {
      const productElement  = buttonElement.parentElement.parentElement; //only for judge 
      // const product = buttonElement.closest('.product') this is the better option, but 'closest' doesn't work in judge

      buttonElement.addEventListener('click', () => {
         const title = productElement .querySelector('product-title').textContent
         const price = Number(productElement.querySelector('product-line-price').textContent)


      })

   }
}