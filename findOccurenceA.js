/**
 * There is a string, str, of lowercase English letters that is repeated infinitely many times. 
 * Given an integer,n ,
 * find and print the number of letter a's in the first  letters of the infinite string.
 *
 * example
 * s = "abcac"
 * n = 10
 *
 * Output
 * 4
 * since n = 10 , s = "abcacabcac"
 * */

const findAlength = (str,l=0) => {
    let map = new Map()
    str = str.split("")
    let len = l || str.length
    // console.log(str)
    for(let i = 0; i < len; i++){
        if (map.has(str[i])){
            map.set(str[i],map.get(str[i])+1)
        }else{
            map.set(str[i],1)
        }
    }
    return map.get("a") || 0
}

const findA = (s,n) => {
    if (!s.includes("a")) {
        return 0
    }

        const sl = s.length
        const sa = findAlength(s)
        if (sa == sl) {
            return n
        }
        const d = Math.floor(n / sl)
        const rem = n % sl
        let remA = 0
        let aOccurence = d * sa
        if (rem != 0) {
            remA = findAlength(s, rem)
            // console.log(`the rem value is ${remA}`)
        }
        aOccurence += remA

        return aOccurence

}


const s = "aab"
const n = 10
sc= "abcac"
const out = findA(s,n)
console.log(out)