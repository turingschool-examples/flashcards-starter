const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

});