function solve(nums, steps) {

                          //element is each current element in arr from start index to end index
                          // index is the current index of the arr
    const result = nums.filter((element, index) => index % steps === 0 )   
    
    return result;
}

console.log(solve(['5', '20', '31', '4', '20'], 2)); 