function persistence(num) {
  let count = 0;
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((product, digit) => product * Number(digit), 1);

    count++;
  }

  return count;
}
console.log(persistence(39)); 
console.log(persistence(999)); 
console.log(persistence(4)); 