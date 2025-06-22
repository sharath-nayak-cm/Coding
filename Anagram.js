function isAnagram(str1,str2) {

    if(str1.length != str2.length) {
        return "the String is not Anagram"
    }
    
    for (let char of str1) {
        if (!str2.includes(char)) {
            return "the String is not Anagram"
        }
    }

    return "This string is Anagram "

}


// Ai reaftcored code 

function areAnagrams(str1, str2) {

    // Sort the characters in the string
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted versions
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listwfen", "sil"));

console.log(areAnagrams("listen", "silent"));

console.log(areAnagrams("hello", "world"));