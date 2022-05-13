const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;
 
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  });

  it('should instantiate with a deck', () => {
    expect(round.deck.cards).to.deep.equal([card1, card2, card3])
  });

  it('should have a method to return current card played', () => {
    expect(round.returnCurrentCard()).to.deep.equal({
      id: 1,
       question: 'What is Robbie\'s favorite animal',
       answers: ['sea otter', 'pug', 'capybara'],
       correctAnswer: 'sea otter'
    })
  });

  it('should keep track of turns and default should be 0', () => {
    expect(round.turns).to.equal(0)
  });

  it('should store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it.skip('should always update turns count', () => {
      round.takeTurn('pug')
      round.takeTurn('hi')
    expect(round.turns).to.equal(2)
  });

  it.skip('should make the next card become the current card', () => {
      round.takeTurn('sea otter')
      round.takeTurn('hi')
    expect(round.turns).to.equal(2);
    expect(round.takeTurn('Fitzgerald')).to.equal('correct!')
    expect(round.turns).to.equal(3);
  });
});

    