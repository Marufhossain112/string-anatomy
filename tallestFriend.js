// find the largest number from an array
function hightestGuy(numbers) {
  let largest = numbers[0]; //! Suppose that first index number is the largest number.
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const heights1 = [157, 134, 188];
let resul1t = hightestGuy(heights1);
console.log(resul1t);

// find the lowest number from an array
function hightestGuy(numbers) {
  let smallest = numbers[0]; //! Suppose that first index number is the smallest number.
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}
const heights = [157, 134, 188, 44, 500];
let result = hightestGuy(heights);
console.log(result);
