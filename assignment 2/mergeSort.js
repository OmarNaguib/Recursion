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

function mergeSort(array) {
  if (array.length < 2) return array;
  const halfwayPoint = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, halfwayPoint)),
    mergeSort(array.slice(halfwayPoint))
  );
}

console.log(mergeSort([1, 8, 6, 4, 7, 2, 3, 6, 5, 8, 1, 5]));
