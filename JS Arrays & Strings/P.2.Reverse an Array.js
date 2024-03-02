function solve (numsToTake, numsArray) {
    let newArrNums = [];

    for (let i = 0; i < numsToTake; i++) {
            newArrNums.push(numsArray[i])
    }

    console.log(newArrNums.reverse().join(" "));
};

function solve2 (numsToTake, numsArray) {
    let newArrNums = [];
    

    for (let i = 0; i < numsToTake; i++) {
            newArrNums.unshift(numsArray[i])
    }

    console.log(newArrNums.join(" "));
};

solve2(3, [10, 20, 30, 40, 50])
