var Weather = function() {
};

Weather.prototype.randomNumberGenerator = function(){
  return Math.floor((Math.random() * 10) + 1);
};

Weather.prototype.randomConditions = function() {
  if(this.randomNumberGenerator > 1 && this.randomNumberGenerator < 6) { 
    return "sunny";
  } else { 
    return "stormy";   
  }
};
