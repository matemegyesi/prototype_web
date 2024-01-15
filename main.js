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

Diak.prototype.info = function(){
    return `${this.nev} ${this.osztaly}`
}

Diak.prototype.webprogAtlag = function(){
    return this.jegyek.atlag()
}

Diak.prototype.eredmenyek = function(){
    return `Legjobb: ${this.jegyek.maxKiv()} - Legrosszabb: ${this.jegyek.minKiv()}`
}

Diak.prototype.ujJegyHozzaadasa = function(jegy){
    this.jegyek.push(jegy);
}

Diak.prototype.ujJegyekHozzaadasa = function(ujJegyek){
    this.jegyek = this.jegyek.concat(ujJegyek);
}

const diak = new Diak("Alma", "12.A", [1,2,3,4,5])
console.log(diak.info());
console.log(diak.webprogAtlag());
console.log(diak.eredmenyek());
diak.ujJegyHozzaadasa(4);
diak.ujJegyekHozzaadasa([1,2,3]);
console.log("Frissített jegyek:", diak.jegyek);