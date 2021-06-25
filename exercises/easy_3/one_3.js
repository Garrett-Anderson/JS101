function crunch(string) {
  let strArray = string.split('');
  let result = '';

  for (let index = 0; index < strArray.length; index++) {
    if (strArray[index] === strArray[index + 1]) {
      continue; 
    }
    result += strArray[index];
  }

  return result;
}


console.log (crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""