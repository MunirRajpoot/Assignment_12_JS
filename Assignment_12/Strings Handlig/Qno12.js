// Write a js program to check whether a string is palindrome or not.
let str="madam"
function checkPalindrom(str){
    let splittedStr= str.split("")
    let reversedStr=[...splittedStr].reverse()
    if( splittedStr.join("")==reversedStr.join("")){
        console.log("This string is Palindrom");
    } else console.log("This string is not Palindrom");
}
checkPalindrom(str)