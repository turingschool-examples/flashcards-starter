const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function (){
  it('should be a function', function(){
    expect(Deck).to.be.a('function');
  });
});
