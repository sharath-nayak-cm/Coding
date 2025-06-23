// we need get the sum zero in the sorted arrray 
// arr = [-4,-3,-2,0, 2, 3]


function sumZero(arr) {
    let first = 0
    let last = arr.length - 1
    let total 
    let res 

    while(first < last) {
        total  = arr[first] + arr[last]
        if(total == 0) {
            res = [arr[first] ,arr[last]]
            return  res
        }
        if(total > 0){
            last--
        }else
        {
            first ++
        }
    }

    if(!res) {
        return "undefind"
    }
   
 }


//  const values = [-4,-2,0, 1, 3,5];

 const values = [-4,-3,-2,0, 1, 3,5];

const res = sumZero(values);
console.log(res);