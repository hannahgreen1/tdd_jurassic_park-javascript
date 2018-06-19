const Park = function (name, ticketPrice, dinosaur) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaur = [];
}

Park.prototype.countDinosaurs = function () {
  return this.dinosaur.length;
};

Park.prototype.addDinosaurs = function (dinosaur) {
  this.dinosaur.push(dinosaur);
};

Park.prototype.removeDinosaurs = function (dinosaur) {
  this.dinosaur.pop(dinosaur);
};

module.exports = Park;
