// Write a function called sumZero which accepts a sorted array of intergers 
// The function should find the first pair where the sum of 0 is
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero ([-3, -2, -1,0,1,2,3]) // [-3, 3]

function sumZero (arr) {

  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
     
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])