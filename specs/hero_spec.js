var assert = require('chai').assert;
var Hero = require( '../hero');
var Food = require( '../food');
var Rat = require('../rat');

describe( 'hero', function(){

  it('should talk',function(){
    var Josh = new Hero("Josh", 100, "chupa chups")
    
    assert.deepEqual('Josh', Josh.talk())
  })

  it('health should increase by food replenishment value * 1.5, when food is eaten', function(){
    var Josh = new Hero("Josh", 100, "chupa chups")
    var chupaChups = new Food('chupa chups', 10)
 
    Josh.eat(chupaChups);

    assert.equal(115, Josh.health);
  })
  it('should poison food if touched by rat', function(){
    var Josh = new Hero("Josh", 100, "chupa chups")
    var food1 = new Food('chips', 10)
    var Sam = new Rat("Sam")

    Sam.touch(food1);
  
    Josh.eat(food1);
    assert.equal(90, Josh.health);
  })
})