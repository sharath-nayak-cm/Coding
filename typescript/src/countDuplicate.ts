function countDuplicate(array : number[]) : Record<number,number> {
   const  countMap : Record<number,number> = {}
    for(const num of array) {
        countMap[num] = countMap[num]? countMap[num]+1 : 1
    }


    return countMap;
    
}


const values = [1, 2, 2, 3, 4, 4, 5, 4];

const res = countDuplicate(values);
console.log(res);

