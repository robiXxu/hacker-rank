/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
  if( nums.filter(n => !(n >=1 && n <= 100)).length > 0 ) { throw new Error('One of the elements in the  array is not between 0..101')}
  return nums.map(n => n%2===0 ? n*2 : n*3)
}

const input = [1,2,3,4,5,10];

modifyArray(input); //?