// 11. Write a js program to count frequency of each element in an array.
let arr= [1,1,22,3,22,44,44]
function countFreq(arr){
    let counter={}
    for( let i=0; i<arr.length; i++){
        if(!counter[arr[i]]){
            counter[arr[i]]=1
        }else {counter[arr[i]]++}
    }
    return counter
}
console.log(countFreq(arr));