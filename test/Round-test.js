const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let newDeck;
  let newRound;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    newDeck = new Deck([card1, card2, card3]);
    newRound = new Round(newDeck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(newRound).to.be.an.instanceof(Round);
  }); 

  it('should store a deck', () => {
    expect(newRound.deck.cards).to.deep.equal([card1, card2, card3])
  });

  it('should start the round with 0 turns', () => {
    expect(newRound.turns).to.equal(0);
  });

  it('should increase turns', () => {
    newRound.takeTurn();
    newRound.takeTurn();
    expect(newRound.turns).to.equal(2);
  }); 

  it('should return the current card being played', () => {
    newRound.returnCurrentCard();
    expect(newRound.returnCurrentCard()).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });

  it('should evaluate guess', () => {
    expect(newRound.takeTurn('sea otter')).to.equal('correct!');
    expect(newRound.takeTurn('spleen')).to.equal('incorrect!');
  });

  it('should store incorrect guesses', () => {
    expect(newRound.incorrectGuesses).to.deep.equal([]);
    newRound.takeTurn('wrong answer');
    expect(newRound.incorrectGuesses).to.deep.equal([newRound.currentCard.id]);
    
  });

  it('should calculate percentage of correct guesses', () => {
    newRound.takeTurn('sea otter');
    newRound.takeTurn('spleen');
    newRound.takeTurn('Fitzgerald');
    expect(newRound.calculatePercentCorrect()).to.equal(66);
  });

  it('should print game over message', () => {
    newRound.takeTurn('sea otter');
    newRound.takeTurn('spleen');
    newRound.takeTurn('Fitzgerald');
    newRound.calculatePercentCorrect();
    expect(newRound.endRound()).to.equal('** Round over!** You answered 66% of the questions correctly!');
  });
});