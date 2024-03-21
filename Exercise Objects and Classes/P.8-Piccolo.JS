function solve(parkingInput) {
    const parking = [];

    let inComand = 'IN'

    for (const carAction of parkingInput) {
        if (carAction[0] === 'I') {
            parking.push(carAction.slice(4))
        }
        else {
            const indexRemove = parking.indexOf(carAction.slice(5))
           parking.splice(indexRemove, 1)
        }
    }

    if (parking.length < 1) {
        console.log('Parking Lot is Empty');
    }

    parking.sort((a,b) => a.localeCompare(b)).forEach(number => {console.log(number)});

}

function solve2(parkingInput) {
    const parking = {};

    for (const carAction of parkingInput) {
        const [direction, carNumber] = carAction.split(', ')

        direction === 'IN' ?
            parking[carNumber] = true
            : delete parking[carNumber]
    }

    Object.keys(parking)
          .sort((a,b) => a.localeCompare(b))
          .forEach(number => console.log(number))
}

solve2(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
