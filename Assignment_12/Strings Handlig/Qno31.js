// 31. Write a js program to count occurrences of a word in a given string.
let str= "This is a book. It is my book"
let strInLowerCase= str.toLowerCase()
let newaStr= strInLowerCase.match(/ is /g)
console.log(newaStr.length);

// other Method
// let str= "This is a book. It is my book"
// let wordToFind= "is"
// function findWordOcurr(str, word){
//     let splitedStr= str.split(" ")
//     let counter= 0
//     for(let i= 0; i< splitedStr.length; i++){
//         if(word== (splitedStr[i])){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(findWordOcurr(str,wordToFind));