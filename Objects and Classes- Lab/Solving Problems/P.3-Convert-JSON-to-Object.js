function convertJSON(input) {
    let convertToObj = JSON.parse(input);

    Object.keys(convertToObj)
    .forEach(propName => 
        console.log(`${propName}: ${convertToObj[propName]}`))
}

convertJSON('{"name": "George", "age": 40, "town": "Sofia"}');