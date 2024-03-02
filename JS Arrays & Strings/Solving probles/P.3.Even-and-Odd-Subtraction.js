function solve(nums) {

    let allNums = nums;
    
    let evenNums = allNums.filter(nums => nums % 2 === 0)

    let oddNums = allNums.filter(nums => nums % 2 !== 0)    

    let evenSum = evenNums.reduce((sum, value) => sum + value, 0);

    let oddSum = oddNums.reduce((sum, value) => sum + value, 0);
        
    console.log(evenSum-oddSum);
};


solve([3,5,7,9]);
