// Write a function that aceepts an array and a value
// loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found 
// If the value is never found, return -1

function linearSearch(arr, value) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
    
  }
  return -1;
  
}

linearSearch([34, 56, 14, 7, 1, 12], 1)