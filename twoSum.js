/*
Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// this solution has O(n2) 
const  firsttwoSum = function(nums, target) {
    let result 
    
    for (let i = 0; i < nums.length-1; i++) {
         for (let j = i+1; j < nums.length; j++) {
        
            sum = nums[i]+nums[j]
            if (sum === target) {
                result =  [nums[i], nums[j]]
            }
         }
    
    }
    return result
};



// This is optimal solution 
function twoSum(nums, target){
    let result_map = {}

    for (let i = 0; i < nums.length; i++) {
         const rem = target - nums[i]

         if(rem in result_map){
            return [result_map[rem],i]
         }
         result_map[nums[i]]=i
    }
}


// const values = [2,7,11,15,14];
// const target = 9

const values = [3,2,4];
const target = 6



const res = twoSum(values,target);
console.log(res);