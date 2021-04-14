
function shortLongShort(a, b) {
  let short = a.length < b.length ? a : b;
  let long = a.length > b.length ? a : b;

  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh'));    
console.log(shortLongShort('abcde', 'fgh'));    
console.log(shortLongShort('', 'xyz'));  