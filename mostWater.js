/**
 * Container  with most water
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 *
 * */


/**
 * @param {number[]} hgt
 * @return {number}
 */
const  maxArea = function(height) {
    let maxWater = 0
    let j = height.length-1
    let i = 0
        while (i < j) {
            console.log(`the before value of i ${height[i]} and j ${height[j]}`)
            let len = height[i] < height[j] ? height[i] : height[j]
            let wid = j - i
            console.log(`the height is ${len} and width is ${wid}`)
            let currWater = len * wid
            console.log(`the current water level is ${currWater}`)
            // if current water level is greater than maxwater level then make current water has max
            if (currWater > maxWater) {

                maxWater = currWater
                console.log(`the maxWater water level is ${maxWater}`)
            }
            height[i] < height[j] ? i++ : j--
            console.log(`the after value of i is  ${i}:${height[i]} and j is ${j}:${height[j]}`)
        }
        return maxWater
};

const  height = [1,8,6,2,5,4,9,3,7]
// const  height =  [1,1]

const out = maxArea(height)
console.log(out)