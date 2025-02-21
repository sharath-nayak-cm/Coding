function lengthOfLongestSubstring(str) {
    let longest = 0
    let count = 0
    let seenChar = {}

    let j = 0
    if(!str.length){
        return 0
    }
    let left = 0
for (let right = 0; right< str.length; right++) {
   let curr = str[right]
    let prev = seenChar[curr]
    if(prev >= left){
        left = prev +1
    }
    seenChar[curr] = right
    longest = Math.max(longest, right-left +1)

}
    console.log(seenChar)
    return longest

}

const str = "abcabcdb"

const out = lengthOfLongestSubstring(str)
console.log(out)