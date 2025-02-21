/**
 * The player can jump on any cumulus cloud having a number that is equal
 * to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads.
 * Determine the minimum number of jumps it will take to jump from the starting position to the last cloud.
 * ex: In
 * 7
 *0 0 1 0 0 1 0
 * Out
 * 4
 *in
 * 6
 * 0 0 0 0 1 0
 * Out
 *
 * 3
 * */



function jumpingOnClouds(c) {
    // Write your code here
    let paths = [0]
    let j=2
    for(let i = 1; i < c.length; i++) {
        console.log("---the before value of j  ",j)
        if(c[j] === 0){
            console.log("---value of j  ",j)
            paths.push(j)
        }
        else if(c[j-1] === 0)
        {
            console.log("------value of j-1  ",j-1)
            j = j - 1
            paths.push(j)
            console.log(`the value of j is ${j} and paths is ${paths} `)

        }
        if (j < c.length-1){
            j+=2
        }else {
            break
        }


        console.log("---the after value of j  ",j)
    }
console.log(paths)
    return paths.length -1
}



// This code has less time complexity since we don't have to irate through whole array like previous one
function refactClouds(c) {
   let j = 0
    const paths = [0]
    while(j < c.length-1){
        console.log("---the before value of j  ",j)
        c[j+2] ===0 ? j+=2 : j++
        paths.push(j)
        console.log("---the after value of j  ",j)
    }
    return paths.length-1
}
const clouds = [0, 0, 1, 0 ,0,1,0]
c1 = [0,1,0,0,0,1,0]
const res = refactClouds(clouds);

console.log(res)