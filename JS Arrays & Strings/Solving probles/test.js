function customSort(array) {
    // Sort the array in ascending order
    array.sort((a, b) => a - b);
  
    // Create a new array to store the custom-sorted elements
    let result = [];
  
    // Iterate from the middle to both ends of the sorted array
    for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
      // Add the smaller element to the result array
      result.push(array[i]);
      // Add the larger element to the result array (skip if the indices are equal)
      if (i !== j) {
        result.push(array[j]);
      }
    }
  
     return result;
  }
  

  
 