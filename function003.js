// Write a function called sumZero which accepts a sorted array of intergers 
// The function should find the first pair where the sum of 0 is
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero ([-3, -2, -1,0,1,2,3]) // [-3, 3]

function sumZero (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// sumZero ([-3, -2, -1,0,1,2,3]) // [-3, 3]
sumZero ([-4, -3, -2, -1, 0,1,2,5]) // [-3, 3]

