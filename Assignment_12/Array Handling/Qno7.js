// 7. Write a js program to count total number of negative elements in an array.

let arr=[12,-32,31,-45,21,-34];
negElements=[];
for (let index = 0; index < arr.length; index++) {
   if (arr[index]<0) {
    negElements.push(arr[index])
   }
    

}

console.log(`${negElements.length} are Negative Elements.`);