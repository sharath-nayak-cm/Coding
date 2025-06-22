function findMax(numbers : Array<number>) :number| undefined {
    let maxValue :number = 0
    for (let index = 0; index < numbers.length; index++) {
        if (maxValue < numbers[index] ){
                maxValue = numbers[index]
        }
    }
    return maxValue
}



const values = [10, 45, 2, 99, 30];
const max = findMax(values);
console.log(max);

