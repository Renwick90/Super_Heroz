var Rat = function(name){
  this.name = name;
}

Rat.prototype = {

  touch: function(food){
    return (food.repVal *= -1);
  }
}

  module.exports = Rat