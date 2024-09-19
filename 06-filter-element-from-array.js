/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i);
    if (result) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
