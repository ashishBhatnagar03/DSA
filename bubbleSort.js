//Write a program to sort the given array using bubble sort algorithm.
//Input: [2, 3, 1, 5, 4]
//Output: [1, 2, 3, 4, 5]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 3, 1, 5, 4]));
