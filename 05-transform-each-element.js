/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let resultArr = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    resultArr.push(fn(arr[i], i));
  }
  return resultArr;
};
