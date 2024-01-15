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

function Diak(nev, osztaly, jegyek){
    this.nev = nev;
    this.osztaly = osztaly;
    this.jegyek = jegyek;
}

const diak = new Diak("Feri", "12.A", [1,2,3,4,5])

Diak.prototype.info = function(){
    return `${this.nev} ${this.osztaly}`
}

Diak.prototype.webprogAtlag = function(){
    return this.jegyek.atlag()
}

Diak.prototype.eredmenyek = function(){
    return `${this.jegyek.maxKiv()} ${this.jegyek.minKiv()}`
}