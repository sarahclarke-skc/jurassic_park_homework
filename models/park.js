const Dinosaur = require("./dinosaur");

const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinos = [];
};


Park.prototype.addDino = function (dino) {
    this.collectionOfDinos.push(dino);
};

Park.prototype.removeDino = function (dino) {
    const indexOfDino = this.collectionOfDinos.indexOf(dino);
    this.collectionOfDinos.splice(indexOfDino, 1);
};

Park.prototype.mostVisitedDino = function() {
    let popularDino = this.collectionOfDinos[0];

    for (const dino of this.collectionOfDinos) {
        if (dino.guestsAttractedPerDay > popularDino.guestsAttractedPerDay) {
            popularDino = dino;
        }
    }
    return popularDino

}


module.exports = Park;