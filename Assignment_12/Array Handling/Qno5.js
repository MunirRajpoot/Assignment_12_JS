// 5. Write a js program to find second largest element in an array.
let arr=[14,49,235,01,24]
let max=0;
let secMax=0;
function findSecLargest(arr){
    for (let i = 0; i< arr.length; i++) {
        if (arr[i]>max) {
            secMax=max
            max= arr[i]
        } else if ( arr[i]>secMax){
            secMax=arr[i]
        }
    }
    return secMax
}
console.log(findSecLargest(arr));