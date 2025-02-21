// Given an array of mixed data types (integers, strings, and arrays), write a method that transforms the input array as follows:
//     If an element is an integer, double it.
//     If an element is a string, reverse it.
//     If an element is an array, flatten and reverse it.
//     data = [1, "hello", [1,2], ["a", "b", "c"], 5]
// output : [2, "olleh", 2, 1, "c", "b", "a", 10]



const transform = (data) => {
    let result = []
    for (let ele of data) {
        let type = typeof ele
        switch (type) {
            case 'number':
                result.push(ele * 2)
                break;
            case 'string':
                let strRes = ele.split('').reverse().join('')
                result.push(strRes)
                break;
            case 'object':
                // let res =  Array.isArray(ele) ?   ele.flat() : console.log('not supported  ' + type)
            if (Array.isArray(ele)){
                    while(ele.length > 0){
                        result.push(ele.pop())
                    }
            }

            default:
                  console.error('Unknown type ' + type)
        }
    }
    return result
}

const data =  [1, "hello", [1,2], ["a", "b", "c"], 5]

const out = transform(data)
console.log(out)