function checkPalindrome(str : string) :boolean {
    let left :number = 0
    let right :number =  str.length - 1
   
    while (left < right) {
        if(str[left] !== str[right]) {
            return false 
        }

        left ++
        right --
    }
    return true 
}



// const values = "madedar";
const values = "racecar";
// const values = "hello";

const isPalindrome = checkPalindrome(values);
console.log(isPalindrome);

