const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let cards;
  before(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ['reduce()', 'map()', 'filter()'], 'reduce()');
    card3 = new Card(12, 'Which iteration method returns an array of the same length as the original array?', ["map()", "forEach()", "reduce()"], 'map()');
    deck = new Deck([card1, card2, card3]);
    cards = deck.cards;
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round(cards);
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store a deck', () => {
    const round = new Round(cards);

    expect(round.deck).to.equal(cards);
  });

  it('should default to having 0 turns', () => {
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should store a current card', () => {
    const round = new Round(cards);
    expect(round.currentCard).to.equal(card1);
  });

  //how do I word this it to say should be an empty array
  it('should default to incorrectGuesses as an empty array', () => {
    const round = new Round(cards);
    expect(round.incorrectGuesses).to.deep.equal([]);

  });

  it('should store incorrect guesses', () => {
    const round = new Round(cards);
    const incorrectGuess1 = 'array';
    const incorrectGuess2 = 'function';

    round.incorrectGuesses.push(incorrectGuess1);
    expect(round.incorrectGuesses).to.deep.equal(['array']);

    round.incorrectGuesses.push(incorrectGuess2);
    expect(round.incorrectGuesses).to.deep.equal(['array', 'function']);
  });

})