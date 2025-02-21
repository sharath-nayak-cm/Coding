/**
 * A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example,
 * if 2  left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2] .
 * Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
 *
 * input
 * 5 4
 * 1 2 3 4 5
 *
 * output
 * 5 1 2 3 4
 *
 * */


function rotLeft(a, d) {
    // Write your code here
    
    let bb = a.splice(d)
    let temp = [...bb,...a]

    return temp
}

a = [1,2,3,4,5]
d = 4

const out = rotLeft(a, d)
console.log(out)