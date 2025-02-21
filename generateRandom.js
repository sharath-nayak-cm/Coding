/**
 * the getRandom function creates a closure because the ranNum array is declared outside the num.times function and is still accessible within the times method.
 * Here's a breakdown of how the closure works in your example:
 *
 * ranNum is defined in the outer function getRandom.
 *
 * The num.times method, which is called within getRandom, has access to ranNum because of the closure.
 *
 * Every time the anonymous function inside times is called, it can still access and modify ranNum.
 * */
Number.prototype.times = function (fn) {
    for (let i = 0; i < this; i++) {
        fn()
    }
}


const getRandom = (num) =>{
    console.log(num)
    let ranNum = []
    num.times(() => {
        ranNum.push( Math.floor((Math.random() * num)))
        return ranNum;
    })
    //print the random number value
    ranNum.map((num) => console.log(num))
}


console.log(getRandom(5))