const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Card');
const Card = require('../src/Card');

describe('Deck', function(){

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function(){

  });
});