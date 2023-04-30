// 12. Write a js program to print all unique elements in the array.

let arr = [1, 2, 3, 4, 5, 5, 6];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);
