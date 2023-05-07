// 13. Write a js program to reverse order of words in a given string.

let string="A quick brown fox jumps over a lazy dog"
let splitedStr= string.split(" ")
let reversedStr= [...splitedStr].reverse();
console.log(reversedStr.join(" "));