function city(cityInfo) {
    
    for (const cityParams in cityInfo) {
            console.log(`${cityParams} -> ${cityInfo[cityParams]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});