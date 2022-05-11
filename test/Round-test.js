const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function(){
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should hold a deck', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck);
  })

  it('should keep track of the current card', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  })

  it('should have a turn counter property', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);
    expect(round.turnCount).to.equal(0);
  })

  it('should be able to takeTurn', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    round.takeTurn('sea otter');

  })

  it('should make a new turn instance when using takeTurn', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.be.an.instanceof(Turn);
  })

  it('should increment turn counter when a turn has been taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    round.takeTurn('sea otter');
    round.takeTurn('appendix');
    expect(round.turnCount).to.equal(2);

  })

  it('should change current card when a turn has been taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[2]);
  })

  it('should change current card whether the guess is incorrect or not', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    round.takeTurn('sea otter');
    round.takeTurn('appendix');
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[2]);
  })

  it('should track incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    round.takeTurn('pug');
    round.takeTurn('appendix');
    expect(round.incorrectGuesses).to.deep.equal([1,14]);
  })
  it('should have the ability to evaluate percent of correct guesses', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    round.takeTurn('pug');
    round.takeTurn('appendix');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(33);
  })

  it('should print result', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1,card2,card3]);

    const round = new Round(deck);

    round.takeTurn('pug');
    round.takeTurn('appendix');
    round.takeTurn('Fitzgerald');
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal(`** Round over! ** You answered 33% of the questions correctly!`);
  })
})
