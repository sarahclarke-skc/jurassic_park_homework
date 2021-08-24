const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinos = [];
}

module.exports = Park;

Park.prototype.addDino = function (dino) {
    this.collectionOfDinos.push(dino);
}