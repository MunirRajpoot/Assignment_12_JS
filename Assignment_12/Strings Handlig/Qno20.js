// 20. Write a js program to count frequency of each character in a string.

let string="Hello World"
function findFreq(str){
    let counter={}
    for( let i=0; i<str.length; i++){
        let char= str.charAt(i)
        if(!counter[char]){
            counter[char]=1
        }else{ counter[char]++}
    }
    return counter
}
console.log(findFreq(string));
