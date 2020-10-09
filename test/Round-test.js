const chai = require('chai');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');
const expect = chai.expect;

describe('Round', function() {

  it('should instantiate the Round class', function() {
    const round = new Round();
    
    expect(round).to.be.an.instanceOf(Round);
  })

  it('should take in a deck', function() {
    const card1 = new Card(1, 'What is Joe\'s favorite food', ['pizza', 'burgers', 'noodles'], 'noodles');
    const card2 = new Card(2, 'What is Joe\'s favorite animal', ['dog', 'cat', 'frog'], 'cat');
    const card3 = new Card(3, 'What is Joe\'s favorite color', ['blue', 'red', 'yellow'], 'blue');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck.cards).to.deep.equal([card1, card2, card3]);
  })

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Joe\'s favorite food', ['pizza', 'burgers', 'noodles'], 'noodles');
    const card2 = new Card(2, 'What is Joe\'s favorite animal', ['dog', 'cat', 'frog'], 'cat');
    const card3 = new Card(3, 'What is Joe\'s favorite color', ['blue', 'red', 'yellow'], 'blue');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck.cards[0]).to.deep.equal(card1);
  })

  it('should be able to take a turn', function() {
    const card1 = new Card(1, 'What is Joe\'s favorite food', ['pizza', 'burgers', 'noodles'], 'noodles');
    const card2 = new Card(2, 'What is Joe\'s favorite animal', ['dog', 'cat', 'frog'], 'cat');
    const card3 = new Card(3, 'What is Joe\'s favorite color', ['blue', 'red', 'yellow'], 'blue');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('noodles');

    expect(round.turns).to.equal(1);
    expect(round.deck.cards[0]).to.deep.equal(card1);
  })

  it('should be able to calculate the percent of correct guesses', function() {
    const card1 = new Card(1, 'What is Joe\'s favorite food', ['pizza', 'burgers', 'noodles'], 'noodles');
    const card2 = new Card(2, 'What is Joe\'s favorite animal', ['dog', 'cat', 'frog'], 'cat');
    const card3 = new Card(3, 'What is Joe\'s favorite color', ['blue', 'red', 'yellow'], 'blue');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck.cards[0]).to.deep.equal(card1);
  })
})