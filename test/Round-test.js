const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function(){
  it('should start with a deck of cards', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);
    expect(deck1).to.equal(deck1);
  });

  it('should return the first card being played at the beginning of the round', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);
    round1.returnCurrentCard();
    expect(round1.returnCurrentCard()).to.equal(round1.deck.cardsInDeck[0]);
  });

  it('should count how many turns have been taken', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    round1.takeTurn('spleen');

    expect(round1.turns).to.equal(2);
  });

  it('should store the id\s of incorrect guesses', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    expect(round1.incorrectGuesses).to.deep.equal([1]);
  });

  it('should give feedback if a player\s guess is incorrect', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    expect(round1.feedback).to.equal('Incorrect!');
  });

  it('should give feedback if a player\s guess is correct', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('sea otter');
    expect(round1.feedback).to.equal('Correct!');
  });

  it('should go to the next card after a turn is completed', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('sea otter');
    expect(round1.currentCard).to.equal(card2);
  });

  it('should calculate the percentage of correct guesses', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    round1.takeTurn('gallbladder');
    round1.takeTurn('Fitzgerald');
    round1.calculatePercentCorrect();
    expect(round1.calculatePercentCorrect()).to.equal(67);

    const card4 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card5 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card6 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck2 = new Deck([card4, card5, card6]);
    const round2 = new Round(deck2);

    round2.takeTurn('sea otter');
    round2.takeTurn('gallbladder');
    round2.takeTurn('Fitzgerald');
    round2.calculatePercentCorrect();
    expect(round2.calculatePercentCorrect()).to.equal(100);
  });

  it('should print feedback to the console when the round is over', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    round1.takeTurn('gallbladder');
    round1.takeTurn('Fitzgerald');
    round1.endRound();
    expect(round1.endRound()).to.equal(round1.endRoundMsg);

    const card4 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card5 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card6 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck2 = new Deck([card4, card5, card6]);
    const round2 = new Round(deck2);

    round2.takeTurn('sea otter');
    round2.takeTurn('gallbladder');
    round2.takeTurn('Fitzgerald');
    round2.endRound();
    expect(round2.endRound()).to.equal(round2.endRoundMsg);
  });
});
