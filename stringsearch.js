// loop over the longer string
// loop over the shorter string
// if the characters dont match, break out of the inner loop
// if the characters do match, keep goin
// if you complete the inner loop and find a match, increment the count of the match
// return the count 

function stringSearch(long, short) {

  let count = 0;
  
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // console.log(i, j)
      console.log(short[j], long[i+j])
      if (short[j] !== long[i+j]) {
        console.log("Break!")
        break;
      }
      if ( j === short.length -1) {
        console.log("Found It!")
        count++;
      }

    }
  }
  return count;
  
}

stringSearch("Your cups down lets Go", "ups")