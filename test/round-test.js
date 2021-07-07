const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () = {
  let round;
  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',['object', 'array', 'function'],'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?',['array', 'object', 'function'],'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'],'mutator method');
    const deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', function() {

    expect(round).to.be.an.instanceof(Round);
  });



});
