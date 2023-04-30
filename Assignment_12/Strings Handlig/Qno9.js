// 9. Write a js program to count total number of vowels and consonants in a string.

let string="A quick brown fox jumps over a lazy dog"
function findVowelsCons(str){
    let vowels="aeiou"
    let noOfVowels=0
    let noOfCons=0
    for(let i=0; i<str.length;i++){
        let char= str[i].toLowerCase()
        if(vowels.includes(char)){
            noOfVowels++
        } else if ( char>= "a" && char<= "z"){
            noOfCons++
        }
    } return { vowels: noOfVowels, Consonants: noOfCons}
}
console.log(findVowelsCons(string));