var assert = require("assert"); // core module
var A = require('../apples.js');  // our module

describe('apple numbers', function(){
  describe('Module A', function(){
    it('should have a calculation Method', function(){
      assert.equal(typeof A, 'object');
      assert.equal(typeof A.getCalculation, 'function');
    })
    it('A.getCalculation(2000,200), should equal[18,0]', function(){
    assert.deepEqual(A.getCalculation(2000,200), [18,0]);
    })
    it('A.getCalculation(4000,3200), should equal[8,0]', function(){
    assert.deepEqual(A.getCalculation(4000,3200), [8,0]);
    })
    it('A.getCalculation(2000,1020), should equal[9,80]', function(){
    assert.deepEqual(A.getCalculation(2000,1020), [9,80]);
    })
  })
});  