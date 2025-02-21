

function isPalindrome(str,i,j) {
    while (i < j) {
        if(str[i] != str[j]) {
          return false
        }
        i ++
        j --
    }
    return true
}


function validPalindrome(str) {
    let left = 0
    let right = str.length-1

    while (left < right) {
        if(str[left] != str[right]) {
            let res1 = isPalindrome(str, left+1, right)
            let res2 = isPalindrome(str, left, right-1)
            return (res1 || res2)
        }
        left ++
        right --
    }
    return true
}

let str = "abcdba"
const out = validPalindrome(str)
console.log(out)

