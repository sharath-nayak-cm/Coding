/**
 * Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker.
 * One person can bribe at most two others.
 * No person can bribe more than two people,if anyone has bribed more than two people, print Too chaotic.
 *
 * example
 *in
 * [ 2, 1, 5, 3, 4 ]
 *
 * out
 * 3
 *
 * in
 *
 * [ 2, 5, 1, 3, 4 ]
 *
 * Too chaotic since 5 has bribed more than 2 people
 *
 * */


function minimumBribes(q) {
    // Write your code here

    // console.log(q)
    let diff = {}
    q.forEach((v,i)=> {
        // console.log(`the index of ${v} is :${i}`)

        let iNum= Number(i) +1
        diff[v] =v - iNum
        // console.log(`the temp is ${diff[v]}`)

    })
    let filtered = {}
    Object.values(diff).map((v,i)=> {
        console.log(`the value of ${i+1} is ${v}`)
    })

    const checkChaotic =  Object.values(diff).filter(v => v > 2)
    // console.log("the checkChaotic value is " + checkChaotic.length)
    if (checkChaotic.length > 0 )  {
        // console.log("the checkChaotic value is  present")
        console.log("Too chaotic")
        return
        // return "too Chaotic"
    }
    filtered = Object.values(diff).filter(v=> v>0)
    // console.log("the filtered value is ",filtered)
    let count  = filtered.reduce((acc, curr)=> acc+curr,0)
    console.log(count)



}

q = [ 1,2,5,3,7,8,6,4 ]

// q = [2, 1, 5, 3, 4]

const out = minimumBribes(q);
// console.log(out)



