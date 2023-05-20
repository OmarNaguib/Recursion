/* eslint-disable no-plusplus */
const merge = function MergeTwoSortedArrays(first, second) {
  let [i, j, k] = [0, 0, 0];
  const mergedArray = [];
  while (i < first.length && j < second.length) {
    if (first[i] <= second[j]) {
      mergedArray[k++] = first[i++];
    } else {
      mergedArray[k++] = second[j++];
    }
  }
  while (i < first.length) {
    mergedArray[k++] = first[i++];
  }
  while (j < second.length) {
    mergedArray[k++] = second[j++];
  }
  return mergedArray;
};

console.log(merge([1, 3, 5], [2, 5, 7, 7]));
