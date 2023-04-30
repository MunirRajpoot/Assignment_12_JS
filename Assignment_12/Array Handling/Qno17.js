// 17. Write a js program to put even and odd elements of array in two separate array.
let arr = [48, 125, 659, 15, 56, 14, 70]
let totalEvenNum = []
let totalOddNum = []
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
        totalEvenNum.push(arr[i])
    } else { totalOddNum.push(arr[i]) }
}

console.log(`${totalEvenNum} are Even Numbers`);
console.log(`${totalOddNum} are Odd Numbers`);