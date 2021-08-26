const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1, card2, card3, cards, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');
    cards = [card1, card2, card3]
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should return current card', function() {

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should update turns count', function() {

  expect(round.turns).to.equal(0);
  round.takeTurn("1");
  expect(round.turns).to.equal(1);
})

it('should update correct or incorrect guesses', function() {

  expect(round.takeTurn('function')).to.equal('function is incorrect!');
  })

  it('calculatePercentCorrect should return correct percentage', function() {

      round.takeTurn('object');
      expect(round.calculatePercentCorrect()).to.equal('You got 100% correct!');
      round.takeTurn('filter');
      expect(round.calculatePercentCorrect()).to.equal('You got 50% correct!');
      round.takeTurn('for loop');
      expect(round.calculatePercentCorrect()).to.equal('You got 33% correct!');

    });

    it('endRound method returns correct percentage', function() {

  round.takeTurn('object');
  round.takeTurn('filter');
  round.takeTurn('for loop');
  expect(round.endRound()).to.equal('You got 33% correct!');

});

});
