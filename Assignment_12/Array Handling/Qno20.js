// 20. Write a js program to sort even and odd elements of array separately.
let arr=[21,42,12,34,56,63,76,67,89];
let evenArray=[];
let oddArray=[];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
        evenArray.push(arr[i]);
    }
    else{
        oddArray.push(arr[i]);
    }
}

console.log(`${evenArray} are Even Numbers.`);
console.log(`${oddArray} are Odd Numbers.`);