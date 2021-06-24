function stringToInteger(string) {
  let numberArray = string.split('');
  let length = numberArray.length;
  return numberArray.reduce((sum, number, index) => {
    return sum + (number * (10 ** (length - index - 1)));
  }, 0);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true