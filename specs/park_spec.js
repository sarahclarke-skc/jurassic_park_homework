const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dino1;
let dino2;
let dino3;
let dino4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dino1 = new Dinosaur('T-Rex', 'carnivore', 10);
    dino2 = new Dinosaur('Tricerotops', 'herbivore', 20);
    dino3 = new Dinosaur('Raptor', 'carnivore', 30);
    dino4 = new Dinosaur('Stegosaurus', 'herbivore', 40);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinos;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino('T-Rex');
    const actual = park.collectionOfDinos.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino('T-Rex');
    park.addDino('Raptor');
    park.removeDino('Raptor');
    const expected = ['T-Rex'];
    const actual = park.collectionOfDinos;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.mostVisitedDino();
    assert.deepStrictEqual(actual, dino4)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
