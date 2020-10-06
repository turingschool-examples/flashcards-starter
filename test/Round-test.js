const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should indicate the number of turns', function() {
    const round = new Round();

    expect(round.turns).to.equal(0);
  });

  it('should record an array of incorrect guesses', function() {
    const round = new Round();

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should update turn count', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);

    round.takeTurn('gallbladder');
    round.takeTurn('William');
    expect(round.turns).to.equal(3)
  });

  it('should update the current card with the next card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.deep.equal(card2);

    round.takeTurn('spleen');
    expect(round.turns).to.equal(2);
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should have incorrect guesses set to empty by default', function() {
    const round = new Round();

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should record incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should return feedback on whether the answer is correct or incorrect', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('pug');
    expect(round.takeTurn()).to.equal('incorrect!');
  });

  it('should calculate the percentage of cards guessed correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('pug');
    round.takeTurn('appendix');
    round.takeTurn('Fitzgerald');
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should print a message when the round is over', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('pug');
    round.takeTurn('appendix');
    round.takeTurn('Fitzgerald');
    round.calculatePercentCorrect();
    round.endRound()

    expect(round.endRound()).to.equal('**Round over!** You answered 33% of the questions correctly!');
  })
})
