function solve(nums, steps) {

    const result = nums.filter((element, index) => index % steps === 0 )   
    
    return result;
}

console.log(solve(['5', '20', '31', '4', '20'], 2)); 