const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', ()=> {

  it('should be a function', ()=> {
    const turn = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', ()=> {
    const turn = new Round();
    expect(turn).to.be.an.instanceof(Round);
  });
  
});
