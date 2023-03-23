const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should make sure the current card is returned', () => {
    let result = round.returnCurrentCard();
    expect(result).to.be.equal(deck.cards[0]);
  }); 

  it('should make sure the turn count updates whether guess is correct or not after takeTurn() is called', () => {
    round.takeTurn('sea otter');
    expect(round.turns).to.be.equal(1);
  }); 

  it('should make sure the current card changes after takeTurn() is called', () => {
    round.takeTurn('sea otter');
    expect(round.currentCard).to.be.equal(card2);
  }); 

  it('should make sure the incorrect guesses are stored by id number in the incorrectGuesses array', () => {
    round.takeTurn('pug');
    expect(round.incorrectGuesses[0]).to.be.equal(1);
  }); 

  it('should make sure the correct guesses are not stored in the incorrectGuesses array', () => {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.be.equal(0);
  }); 

  it('should make sure the feedback is returned if correct', () => {
    let result = round.takeTurn('sea otter');
    expect(result).to.be.equal('correct!');
  }); 

  it('should make sure the feedback is returned if incorrect', () => {
    let result = round.takeTurn('pug');
    expect(result).to.be.equal('incorrect!');
  }); 

  it('should calculate percentage correct when calculatePercentCorrect() is called', () => {
    round.takeTurn('sea otter');
    round.takeTurn('appendix');
    expect(round.calculatePercentCorrect()).to.be.equal(50);
  }); 

  it('endRound() should be a function', () => {
    expect(round.endRound).to.be.a('function');
  });
});