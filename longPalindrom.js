// # Write a Ruby method to find the longest palindromic substring in a given string.
//
// # Output: "bab" or "aba"
//
// #
//  input =>"babad".  => 'bab' or 'aba'
//  input => "demoaroratest"    => output=> arora
// input = "
// input =
// # ab = abba


const myLongestPal = (str) => {
    let p = 1
    let maxPal =""
  while (p < str.length -2) {
      let j =  p +1
      let i = p -1
       while( str[i] == str[j] && i > 0 && j < str.length-1 )
       {
           if(maxPal.length< str.substring(i,j+1).length){
               maxPal = str.substring(i,j+1)
           }
           i--
           j++
       }
           p ++
  }
  return maxPal

}

function leetLongestPal(s) {
    if (s.length === 0) return "";

    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);   // Odd-length palindromes
        let len2 = expandAroundCenter(s, i, i + 1); // Even-length palindromes
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}


const data = "demoaroratest"

const out = leetLongestPal(data)
console.log(out)