/**
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
const twoSum = function(nums, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = function() {
  console.log('Task 0001 - Two Sum:');
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(`  target=${target}, nums=[${nums.join(", ")}]`);
  re = twoSum(nums, target) || [];
  console.log(`  result=[${re.join(", ")}]`);
};


main();
