"use strict"

Array.prototype.atlag = function(){
    let atlag = 0
    for (const element of this) {
        atlag += element
    }
    return atlag / this.length
}

Array.prototype.maxKiv = function(){
    return Math.max(...this);
}

Array.prototype.minKiv = function(){
    return Math.min(...this);
}

const arr = [3,2,1]
console.log(arr.minKiv());