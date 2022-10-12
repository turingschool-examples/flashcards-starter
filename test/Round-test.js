const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {
  beforeEach(() => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
  });
  
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });
  
  // it('should take in the user\'s responses', () => {
  //     expect(round.)
  //   }

  it('should take in a deck argument', () => expect(round.deck).to.deep.equal(deck));
  
  it('should have the currentCard at index 0 of the Deck array at the start of the round', () => {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });
  
  it('should have a method that returns the current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });

  it('should have a turn counter that starts at 0', () => {
    expect(round.turnNumber).to.equal(0)
  });

  it('')

  // it should have the currentCard at index 0 of the Deck array at the start of the round

  // it should record the user's guesses
  // it should record if the guesses are correct or not


})