const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;

  beforeEach(function(){
    park = new Park("Jurassic Park", 25);
  })

  it('should have a name', function () {
    const actualValue = park.name;
    assert.strictEqual(actualValue, "Jurassic Park");
  })


  it('should have a ticket price', function (){
    const actualValue = park.ticketPrice;
    assert.strictEqual(actualValue, 25);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaur;
    assert.deepStrictEqual(0, 0);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurs(dinosaur1);
    const actual = park.dinosaur[0];
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurs(dinosaur1);
    park.removeDinosaurs(dinosaur1);
    const actual = park.dinosaur[0];
    assert.deepStrictEqual(0, 0);
  });


  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
