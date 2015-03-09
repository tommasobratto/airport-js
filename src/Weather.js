var Weather = function() {
  this.conditions;
};

Weather.prototype.randomConditions = function() {
  var randomNumber = Math.floor((Math.random() * 10) + 1);
  if( randomNumber > 1 && randomNumber < 6) {
    this.conditions = "sunny"; 
  } else { 
    this.conditions = "stormy";   
  } 
};
