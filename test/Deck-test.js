const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Deck', () => {
  
  it.skip('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });
  
}