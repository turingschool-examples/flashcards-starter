const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take the user\'s guess as a string as an argument', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.be.a('string');
  });

  it('should take the current card object as an argument', function() {
    const turn = new Turn('object', card);
    expect(card).to.be.an.instanceof(Card);
  });
});
