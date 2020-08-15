//multiple data been compared to see if the data matches each info
// Given two strings, write a function to determine if the second string is an anagram of the first.

function validAnagram (first, second) {

  if (first.lenght !== second.lenght) {
    return false;
  }
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exist , increment , otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    // adds 1 or set it equal to 1 

  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // cant find letter or letter is zero then its not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }

  }  
  return true;
}
validAnagram('anagram', 'nagaram')
// validAnagram('qwerty', 'qwywrt')
// validAnagram('texttwisttime', 'timetwisttext')
// validAnagram('', '')
// validAnagram('aaz', 'zza')

