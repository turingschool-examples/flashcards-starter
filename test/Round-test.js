
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

let card1, card2, card3, card4, turn1, turn2, turn3, turn4, deck, round;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(12, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(14, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
});


describe('Round', function() {
  it('should return the current card being played', function() {
    console.log('hi', round)
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should update turn count, eveluates guesses, gives feedback, and stores ids of incorrect guesses', function () {
    expect(round.takeTurn()).to.deep.equal(card1);
  });

});