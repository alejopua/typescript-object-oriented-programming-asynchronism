//static

console.log(Math.PI)
console.log(Math.max(1,30,4,2,5,300,2,3,4,5,8,7,500,3))

class myMath {
    static readonly PY: number = 3.14;
    constructor(){}

    static maxi(...numbers: number[]){
        return numbers.reduce((acc, cur) => acc > cur ? acc: cur , Number.NEGATIVE_INFINITY)
    }
}

console.log(myMath.PY)
myMath.PY = 5;
console.log(myMath.PY)

// create an array the negative numbers
const numbersSum = [-2, -1, -8, -4, -5, -3, -4, -5, -8, -7, -3, -5, -0.2 ];
console.log(myMath.maxi(...numbersSum))


