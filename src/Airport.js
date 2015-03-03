var Airport = function() {
this.planes = [];
};

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.release = function(plane) {
  this.planes.splice(plane);
};