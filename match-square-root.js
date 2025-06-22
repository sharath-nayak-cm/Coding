function checkMatchArray(arr1,arr2) {

    return arr1.every(num => arr2.includes(num*num) )
}

const res = checkMatchArray([1,2,3],[2,4,9])

console.log(`the res is ${res}`)