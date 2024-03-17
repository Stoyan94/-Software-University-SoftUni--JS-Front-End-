function city(cityInfo) {
    
    for (const cityParams in cityInfo) {
            console.log(`${cityParams} -> ${cityInfo[cityParams]}`);
    }
}

function citySolve2 (cityInfo) {
    Object
      .keys(cityInfo)
       .forEach(propName => console.log(`${propName} -> ${cityInfo[propName]}`))
}

citySolve2({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});