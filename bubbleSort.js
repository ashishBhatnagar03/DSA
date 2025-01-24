//Write a program to sort the given array using bubble sort algorithm.
//Input: [2, 3, 1, 5, 4]
//Output: [1, 2, 3, 4, 5]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[j] > arr[k]) {
          let temp = arr[j];
          arr[j] = arr[k];
          arr[k] = temp;
        }
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 3, 1, 5, 4]));
