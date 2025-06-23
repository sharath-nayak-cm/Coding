function twoSum(nums :number[],target:number) :number[]| undefined{
    const count_map : Record<number,number>= {}

    for(let i=0;i<nums.length;i++) {
        let findNum: number = target - nums[i]
        if(findNum in count_map){
            return [ count_map[findNum],i]
        }

        count_map[nums[i]] = i

    }

}


// const values = [2,7,11,15,14];
// const target = 9

const values = [3,2,4];
const target = 6



const res = twoSum(values,target);
console.log(res);
