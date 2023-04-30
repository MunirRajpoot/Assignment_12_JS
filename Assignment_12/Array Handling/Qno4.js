// 4. Write a js program to find maximum and minimum element in an array.

const numbers = [10, 20, 30, 40, 50];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log(`Maximum number is ${max}`);
console.log(`Minimum number is ${min}`);
