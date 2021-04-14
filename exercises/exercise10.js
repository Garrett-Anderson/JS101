function multisum(num) {
  let sum = 0;
  for (let number = 3; number <= num; number++) {
      if (number % 3 === 0 || number % 5 === 0) {
          sum += number;
      }
  }
  return sum;
}



multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168