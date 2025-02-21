/**
 * // Given a string s, find the length of the longest
 * // substring
 * // without repeating characters.
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

function myLengthOfLongestSubstring(str) {
    let longest = 0
    let j
    for (let i = 0; i < str.length; i++) {
        j = i
        let temp = new Set()
        // if temp doesn't include the characters push it to temp
        while(!temp.has(str[j]) && j < str.length) {
            temp.add(str[j])
            j++
        }
        if (temp.size > longest) {
            longest = temp.size
        }
    }
    return longest
}


// we can still optimize this solution using sliding window technique

function lengthOfLongestSubstring(str) {
    let longest = 0
    let count = 0
    let charmap = new Map()
    let i = 0
    let j = 0
    while (j < str.length-1) {
        if (!charmap.has(str[j]) && j < str.length) {
            charmap.set(str[j], j)
            j ++
            count ++
        }
        if(charmap.has(str[j]) ){
            let jvalues = charmap.get(str[j])
            console.log(jvalues)
            charmap.set(str[j], j)
            if(jvalues >= i){
                count ++
                if(count > longest) {
                    longest = count
                }
                count = 0
            }
            j ++
            if (j == str.length){
                if(count > longest) {
                    longest = count
                }
            }
        }
    }
       if(charmap.size == 1){
           longest = 1
       }
    console.log(charmap)
    return longest

}

const str = "abcabcbb"

const out = lengthOfLongestSubstring(str)
console.log(out)