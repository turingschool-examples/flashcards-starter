const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store current deck', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  }); 

  it('currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('returnCurrentCard returns the current card being played', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  }); 

  it('takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(card1);
    expect(round.turns).to.deep.equal(0);
    
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    expect(round.turns).to.deep.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
    expect(round.turns).to.deep.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([card2.id]);
  }); 

  it('calculatePercentCorrect calculates and returns the percentage of correct guesses', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.calculatePercentCorrect()).to.deep.equal(`You haven't made a guess yet!`);
    
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.calculatePercentCorrect()).to.deep.equal(100);

    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.calculatePercentCorrect()).to.deep.equal(50);
  }); 

  it('endRound prints a string with stats to the console', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.endRound()).to.deep.equal(`There are still cards left in the round!`);

    expect(round.takeTurn('kittens')).to.equal('incorrect!');
    expect(round.endRound()).to.deep.equal(`** Round over! ** You answered 33% of the questions correctly!`);
  }); 
});