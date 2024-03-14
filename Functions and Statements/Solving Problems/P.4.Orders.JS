function bill(product, buyItemsCount) {
    const billPerCostumer = calculatedPrice(product, buyItemsCount);

    console.log(billPerCostumer.toFixed(2));

    function calculatedPrice(product, buyItemsCount){
        const items = {
            coffee: 1.50,
            water: 1.00,
            coke: 1.40,
            snacks: 2.00
        };
        
        return calculatedSum = items[product] * buyItemsCount;
    }
}

bill("water", 5)