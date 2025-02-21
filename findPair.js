/**
 * There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 *
 * Example
 * n = 8
 * ar = [1,2,1,2,3,1,2,4]
 *
 * There is one pair of color  and one of color .
 * There are three odd socks left, one of each color. The number of pairs is .2
 * */

n = 10
ar = [1,2,1,2,3,1,2,4,1,2,4]

function sockMerchant(n, ar) {
    const result = {}
    const pairs = {}
    let count
    for(const i in ar){
        result[ar[i]] = (result[ar[i]] || 0)+1
        pairs[ar[i]]  = result[ar[i]] % 2 == 0 ? true : false

        }
   console.log(result)
    console.log(pairs)
     count = Object.keys(pairs).filter(key=>pairs[key])


    return count.length
}


// using Map for better performance

function findPair(n, ar) {
    const findCount = new Map()
    let count = 0
    for(let num of ar){
        if(findCount.has(num)){
            findCount.set(num, findCount.get(num)+1)
        }else{
            findCount.set(num,1)
        }

    }

    for(let [key,value] of findCount){
        count += Math.floor(value / 2)
    }
    console.log(findCount)
    return count
}
// const out = sockMerchant(n, ar)
const s1 = findPair(n,ar)
console.log(s1)