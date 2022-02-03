const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Card', ()=> {

  it('should be a function', ()=> {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

});
