const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What prototype method returns an array of the same length with modification?', ['sort', 'map', 'reduce'], 'map');
  const card3 = new Card(3, 'How many arguments does the reduce method take?', ['1', '2', '3'], '2');

  const setup = () => {
    card1;
    card2;
    card3;
  };

it('should be a function', function() {
  setup();
  const newDeck = new Deck([card1, card2, card3]);
  const newRound = new Round(newDeck);
  expect(newRound.roundDeck).to.equal(newDeck);
});

it('should return the current card being played', function() {
  setup();
  const newDeck = new Deck([card1, card2, card3]);
  const newTurn = new Turn('object', card1);
  const newRound = new Round(newDeck);
  const cardReturned = newRound.returnCurrentCard()
  expect(cardReturned).to.equal(card1);
});

it('Taking a turn should increase the turn count by 1', function() {
  setup();
  const newDeck = new Deck([card1, card2, card3]);
  const newTurn = new Turn('object', card1);
  const newRound = new Round(newDeck);
  const turn = newRound.takeTurn();
  const wrongAnswer = newTurn.evaluateGuess()
  expect(newRound.turnCount).to.equal(1);
});

it.skip('If users guess is evaluated as inccorect, the round class should store the ID of the card', function() {
  setup();
  const newDeck = new Deck([card1, card2, card3]);
  const newRound = new Round(newDeck);
  const newTurn = new Turn('array', card1);
  const turn = newRound.takeTurn();
  const eval = newTurn.evaluateGuess();
  expect(eval).to.equal(false);
  expect(newRound.incorrect.length).to.equal(1);
});




});
