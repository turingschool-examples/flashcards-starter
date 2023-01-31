const chai = require('chai');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
});