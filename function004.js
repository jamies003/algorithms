// inplement a function called countUniqueValues, which accpets a sorted array, and counts the unique values in the array. There can be nagative numbers in the array, but it will always be sorted

function countUniqueValues (arr) {
  if (arr.length === 0) return 0;
let i = 0;
for (let j = 1; j < arr.length; j++) {
  if (arr[i] !== [j]) {
    i++;
    arr[i] = arr[j]
  }
  console.log(i, j);
}
return i + 1;

}
countUniqueValues([1,1,1,2,2,3,4,4,5,6,7,7])

