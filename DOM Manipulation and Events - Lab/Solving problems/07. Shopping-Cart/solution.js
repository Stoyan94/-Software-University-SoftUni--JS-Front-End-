function solve() {
   const addProductButtonElements = document.querySelectorAll('button.add-product')
   const textareaElement = document.querySelector('textarea')
   const checkoutButtonElement = document.querySelector('button.checkout')
   let totalPrice = 0;
   let uniqueProducts = {};

   for (const buttonElement of addProductButtonElements) {
      const productElement  = buttonElement.parentElement.parentElement; //only for judge 
      // const product = buttonElement.closest('.product') this is the better option, but 'closest' doesn't work in judge

      buttonElement.addEventListener('click', () => {
         const title = productElement .querySelector('.product-title').textContent
         const price = Number(productElement.querySelector('.product-line-price').textContent)
        
         totalPrice += price;
         uniqueProducts[title] = true;

         textareaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart\n`
      })

   }

   checkoutButtonElement.addEventListener('click', () => {
      Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'))

      const list = Object.keys(uniqueProducts).join(', ')

      textareaElement.textContent += `You bought ${list} for ${totalPrice}\n.` 
   })
}