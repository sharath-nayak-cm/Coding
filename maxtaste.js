/**
 * You are given an array of positive integers price where price[i] denotes the price of the ith candy and a positive integer k.
 *
 * The store sells baskets of k distinct candies. The tastiness of a candy basket is the smallest absolute difference
 * of the prices of any two candies in the basket.
 *
 * Return the maximum tastiness of a candy basket.
 *
 * Input: price = [13,5,1,8,21,2], k = 3
 * Output: 8
 * Explanation: Choose the candies with the prices [13,5,21].
 * The tastiness of the candy basket is: min(|13 - 5|, |13 - 21|, |5 - 21|) = min(8, 8, 16) = 8.
 * It can be proven that 8 is the maximum tastiness that can be achieved.
 * Example 2:
 *
 * Input: price = [1,3,1], k = 2
 * Output: 2
 * Explanation: Choose the candies with the prices [1,3].
 * The tastiness of the candy basket is: min(|1 - 3|) = min(2) = 2.
 * It can be proven that 2 is the maximum tastiness that can be achieved
 */


Number.prototype.times = function (fn) {
    console.log("calling the time function ",this)
    for (let i = 0;  i < this; i++) {
         fn()
    }
}

const getRandom = (num) =>{
    console.log(num)
    let ranNum = []
    num.times(() => {
        ranNum.push( Math.floor((Math.random() * num)))
        return ranNum;
    })
    //print the random number value
    ranNum.map((num) => console.log(num))
    return ranNum
}

const  maximumTastiness = function(price, k) {
    let ran = []
    // let ranArr = getRandom(k)
    let tempArr = [13,5,21]
    let diffArr= []
    let i = 0
    let j = tempArr.length-1

    while (i <= j) {
        diffArr.push(Math.abs(tempArr[i] - tempArr[j]))
        tempArr[i] < tempArr[j] ? i++ : j--
        console.log(diffArr.length)

    }
    console.log(diffArr)
    return diffArr

};

const price = [13,5,1,8,21,2]
const k = 3
const out = maximumTastiness(price, k)
console.log(out)
