let greetings = (arr, obj) => {
  let name = arr.join(' ');
  const {title, occupation} = obj;
  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.