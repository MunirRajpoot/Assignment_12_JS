// 17. Write a js program to count occurrences of a character in given string.
let string="A quick brown fox jumps over a lazy dog"
 // to count occurence of "a"
let occurrenceOfChar= string.match(/a/g)
console.log(occurrenceOfChar.length);