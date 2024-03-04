function solve(nums, rotationCount) {

    let numRotatin = 0

    for (let index = 0; index < rotationCount; index++) {
        numRotatin = nums.shift()
        nums.push(numRotatin)
        
    }  


    console.log(nums.join(' '));
}



solve([51, 47, 32, 61, 21], 2);

