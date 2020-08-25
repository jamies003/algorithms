// This function accepts a sorted array and a value 
// create a left pointer at the start of the array, and a right pointer at the end of the array
// while the left pointer comes before the right pointer
// create a pointer in the middle 
// if you find the value you want, return the index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if you never find the value, return -1

function binarySearch(arr, value) { // arr = Array (12), value = 12 
  let start = 0; // start = 0 
  let end = arr.length -1; // end = 11, arr = Array(12)
  let middle = Math.floor((start + end) / 2); // middle = 5, start = 0
  // console.log(start, middle, end);
  while (arr[middle] !== value && start <= end) { //arr = Array(12), middle = 5, value = 7, start = 0, end = 4

    if (value < arr[middle]) {
      end = middle -1; // end = 4
    }else {
      start = middle + 1; // start = 0, middle = 5
      // it then continues to repeat the process
    }
    middle = Math.floor((start + end) / 2);
    
  }
  console.log(start, middle, end);
  if (arr[middle] == value) {
    return middle
  }
  return -1;

}

binarySearch([1,2,5,7,8,9,11,12,14,16,17,18], 10)
// if the number is not in the array and you didnt add && start <= end 'line 15' then it would run a infinite loop


