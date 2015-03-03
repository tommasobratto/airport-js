var Weather = function() {
  this.randomNumber = 10;
};

Weather.prototype.randomNumberGenerator = function(){
  randomNumber = Math.floor((Math.random() * 10) + 1);
};

Weather.prototype.randomConditions = function(randomNumber) {
  if(randomNumber > 1 && randomNumber < 6) { 
    "sunny"
  } else { 
    "stormy"   
  }
};
