function solve(fruit, weightGrams, priceKilo) {
    let weight = weightGrams / 1000;
    let moneyNeed = weight * priceKilo;

    console.log(`I need $${moneyNeed.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
    
}

solve('orange', 2500, 1.80);