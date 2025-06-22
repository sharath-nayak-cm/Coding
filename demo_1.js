// Reverse a String: Write a function that takes a string as input and returns the reversed string.
// Example: Input: "hello", Output: "olleh"

function reverseString(word) {
    let reversedWord =''
    console.log(`the given word is ${word}`)
    for (let index = word.length-1; index >= 0; index--) {
        // console.log(`the word is ${word[index]}`)
        reversedWord += word[index]
        
    }
    return  reversedWord
}

// const out = reverseString("hello")
// console.log(out)


/*
Find the Maximum Value in an Array: Write a function that takes an array of numbers as input 
and returns the maximum value.
Example: Input: [3, 5, 1, 9, 2], Output: 9
*/

function findMax(arr){
    let maxValue = 0
    for (let index = 0; index < arr.length; index++) {
        if  (arr[index] > maxValue ) {
        maxValue = arr[index]
        }
    }
  return  maxValue
}

// const Max_out = findMax([3, 12, 1, 9, 2])
// console.log(Max_out)


// Check if a String is a Palindrome

function checkPalindrome(str)  {
    let piv  = Math.ceil(str.length / 2) - 1
    let left   = piv -1
    let right  = piv + 1 
   
    while (left > 0 || right < str.length) {
       if (str[left] !== str[right]) {
        return false
       }
       left --
       right ++
    }
    return true 
}


const isPalindrome = checkPalindrome("madam")
console.log(isPalindrome)