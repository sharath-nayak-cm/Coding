//Input: [1, 2, 2, 3, 4, 4, 5], Output: [1, 2, 3, 4, 5]

function countDup(array) {
    let countmap = {}
    for(let num of array) {
        countmap[num]= countmap[num]? countmap[num] + 1 : 1
    }
    return countmap
}


const values = [1, 2, 2, 3, 4, 4, 5,4];
// const values = "hello";

const res = countDup(values);
console.log(res);

