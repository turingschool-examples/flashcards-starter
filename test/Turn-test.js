const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string of the user\'s guess', function() {
    const turn = new Turn('dachshund', 1);
    expect(turn.guess).to.be.a('string');
  });

  
});
