// 19. Write a js program to sort array elements in ascending or descending order.

let arr=[21,42,12,34,56,63,76];

// Sort Element in ascending order
for (let i = 0; i <= arr.length + 1; i++) {
            if (arr[i] < arr[i + 1]) {
               let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

    console.log(arr);

    // // for descending order

for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i <= arr.length + 1; i++) {
        if (arr[i] > arr[i + 1]) {
           let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
}
console.log(arr);