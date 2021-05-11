const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck')

describe('Deck', () => {
  let card1, card2, card3, deck1;
  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'],'mutator method');
    const deck1 = new Deck ([card1, card2, card3]);
  })

  it('should be a function', () =>{
    const deck1 = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck1 = new Deck();
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should store cards', () => {
    expect(deck1.cards).to.equal([card1, card2, card3]);
    expect(deck1.cards[0]).to.be.an.instanceOf(Card)
    })
})
