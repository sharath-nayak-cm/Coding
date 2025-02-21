// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
//
//     Note that after backspacing an empty text, the text will continue empty.
//
// Example 1:
//
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
//     Example 2:
//
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

const myBackspaceCompare = function(s, t) {

    let sWords = []
    let tWords = []

    console.log(`the sWord is ${sWords} and tWord is ${tWords}`)

let len = Math.max(s,t)
for (let i = 0; i < len; i++) {

    s[i] != "#"?sWords.push(s[i]):sWords.pop()
    t[i] != "#"?tWords.push(s[i]):tWords.pop()
}

    if(sWords.length != tWords.length) {
        return false
    }

    for (let i = 0; i < sWords.length; i++) {
        if (tWords[i] != sWords[i]) {
            return false
        }
    }

    return true
};

// const s = "bxj##tw"
// const t = "bxo#j##tw"
function getValidchar(word,i) {
    let backcount = 0
    while(i >= 0) {
        if(word[i] === "#") {
            backcount++
        }else if(backcount > 0) {
            backcount--
        }
        else{
            break;
        }
        i--
    }
    return i
}

const leetBackspaceCompare = function(sword, tword) {
    let sp = sword.length-1
    let tp = tword.length-1

    while(sp >= 0 || tp >= 0) {
        sp = getValidchar(sword,sp)
        tp = getValidchar(tword,tp)

        if(sp >= 0 && tp >= 0 && sword[sp] !== tword[tp]) {
            return false
        }

        if ((sp >= 0) !== (tp >= 0)) {
            return false;
        }
            sp--
            tp--
    }

    return true
}


const s = "bxj##tw"
const t = "bxj###tw"

const out = leetBackspaceCompare(s,t)
console.log(out)