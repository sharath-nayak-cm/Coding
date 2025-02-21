/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array
 * [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 *
 * Example 2:
 *
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 *
 * **/


const  rainWater = function(height) {
    let maxWater = 0

    let i = 0
    let j = i+1
    let waterTrap = []
    while (i < height.length-1) {
        console.log(`inside 1 st while loop the value i  is ${i}`)

    console.log(`after while the value of i is ${ height[i]}`)
        while (height[i] > height[j] ) {
            j++
            if (j > height.length-1) {
                    i++
                j = i+1
                continue;
            }

        }
        console.log(`after the 3rd while the value of j is ${height[j]} and i index and value is ${i}:  ${height[i]}`)
        let wid = j - i

        console.log(`the value of wid is ${height[j]}`)
        console.log(`before wid loop the value wid  is ${ wid}`)

            for (let k = 0; k < wid -1; k++) {
                console.log(`the  got loop value of i ${height[i]} and k ${height[i+1]}`)
                let curr = height[i] - height[k+1]
                console.log(`the value of curr is ${ curr}`)

                waterTrap.push(Math.abs(curr))
            }

            console.log(`the value of waterTrap is ${waterTrap}`)
        maxWater = waterTrap.reduce((a, b) => a + b,0)
                console.log(`the value of  before i is ${i}`)
                i = j
                j = i + 1
        }
    console.log(`the value of maxWater is ${maxWater}`)
    return maxWater
};

const  height = [1,0,2,1,0,1,3,2,1,2,1]
// const  height =  [4,2,0,3,2,5]
// const  height =  [1,0,1]

const out = rainWater(height)
console.log(out)