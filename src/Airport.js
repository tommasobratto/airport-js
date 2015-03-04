var Airport = function() {
  this.planes = [];
  this.hangarCapacity = 3;
};

Airport.prototype.dock = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.release = function(plane) {
  plane.takeOff();
  this.planes.splice(plane);
};

Airport.prototype.isFull = function() { 
  if(this.planes.length === this.hangarCapacity) return true;
};

Airport.prototype.isEmpty = function() {
  if(this.planes.length < 1) return true;
};
