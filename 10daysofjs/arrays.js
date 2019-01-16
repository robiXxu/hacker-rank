/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  if (!(nums.length >= 1 && nums.length <= 10)) { return null; }
  if (nums.filter(n => !(n >= 0 && n <= 100)).length > 0) { return null; }
  const numsSorted = nums.sort((a, b) => b >= a) //?
  const highest = Math.max(...numsSorted);
  return numsSorted.reduce((prev, cur) =>
      (prev = !prev && cur < highest ? cur : prev), undefined);
}

const nums = [10,9,9,8,8,11,8,0,9,1];

getSecondLargest(nums); //?