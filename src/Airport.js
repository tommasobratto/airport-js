var Airport = function() {
this.planes = [];
};

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.release = function(plane) {
  this.planes.splice(plane);
};

Airport.prototype.isFull = function() { 
  var hangarCapacity = 3;
  if(this.planes.length === hangarCapacity) return true;
};

Airport.prototype.isEmpty = function() {
  if(this.planes.length < 1) return true;
};