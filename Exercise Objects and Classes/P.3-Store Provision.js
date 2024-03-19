function solve(stock, delivery) {
    let listProductsStor = {};
    
    for (let i = 0; i < stock.length; i+=2) {
        listProductsStor[stock[i]] = Number(stock[i+1]);        
    }

    for (let i = 0; i < delivery.length; i+=2) {

       if (listProductsStor[delivery[i]]) {
            listProductsStor[delivery[i]] += Number(delivery[i+1]);
            continue;
       }
        listProductsStor[delivery[i]] = Number(delivery[i+1]);
    }

    Object.keys(listProductsStor)
          .forEach(product => console.log(`${product} -> ${listProductsStor[product]}`))
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )