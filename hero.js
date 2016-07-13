var Hero = function(name, health, favFood){
  this.name = name;
  this.favFood = favFood;
  this.health = health;
}

Hero.prototype = {

  talk: function(){
    return this.name;
  },

  eat: function(food){

    if (food.name === this.favFood){
      this.health += (food.repVal * 1.5);
    }else{
      this.health += food.repVal;
    }
    console.log(food)

  }

}

module.exports = Hero
