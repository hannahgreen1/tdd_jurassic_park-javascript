const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

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

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
