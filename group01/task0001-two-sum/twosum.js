/**
 * Two sum: brutal force of two-level nested iterations
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
 const twoSum1 = function(nums, target) {
    // brutal force to check every combination
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};


/**
 * Two sum: hash map plus search
 * trade speed with space
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
const twoSum2 = function(nums, target) {
    const map = {};
    // first create a hash map
    for (let i = 0; i < nums.length; i++) {
        map[`${nums[i]}`] = i;
    }
    // then search target using the hash map
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        if (map[`${num}`] >= 0 && i !== map[`${num}`]) {
            return [i, map[`${num}`]];
        }
    }
    return [];
};


/**
 * Two sum: hash map while search
 * trade speed with space
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
const twoSum = function(nums, target) {
    const map = {};
    // create a hash map
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        // search target at the same time: return if found
        if (map[`${num}`] >= 0) {
            return [i, map[`${num}`]];
        }
        // keep creating the hash map if not found
        map[`${nums[i]}`] = i;
    }
    return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = function() {
    console.log('Task 0001 - Two Sum:');

    var nums = [2, 7, 11, 15];
    var target = 9;
    console.log(`  target=${target}, nums=[${nums.join(", ")}]`);
    re = twoSum(nums, target) || [];
    console.log(`  result=[${re.join(", ")}]`);

    nums = [3, 2, 4];
    target = 6;
    console.log(`  target=${target}, nums=[${nums.join(", ")}]`);
    re = twoSum(nums, target) || [];
    console.log(`  result=[${re.join(", ")}]`);
};


main();
