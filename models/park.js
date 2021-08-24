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
    return popularDino;
};

Park.prototype.findBySpecies = function(species) {

    const listSameSpecies = [];

    for (const dino of this.collectionOfDinos) {
        if (species === dino.species) {
            listSameSpecies.push(dino)
        }
    }
    return listSameSpecies
};

Park.prototype.numberOfDailyVisitors = function() {

    let dailyCount = 0;

    for (const dino of this.collectionOfDinos) {
        dailyCount += dino.guestsAttractedPerDay;
    }
    return dailyCount;
};

Park.prototype.totalYearlyVisitors = function() {
   return this.numberOfDailyVisitors() * 365;
};

Park.prototype.totalRevenue = function() {
    return this.totalYearlyVisitors() * this.ticketPrice
}

module.exports = Park;