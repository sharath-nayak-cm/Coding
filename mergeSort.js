function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    let arr = resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));;
    return  arr
}

const array = [32, 24, 5, 31];
console.log("Original Array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);
