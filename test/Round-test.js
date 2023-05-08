const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { prototypeData } = require('../src/data');

describe('createRound', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should hold a deck of cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = createDeck([card1, card2, card3]);
    const deck2 = createDeck(prototypeData);
    const round1 = createRound(deck1);
    const round2 = createRound(deck2);

    expect(round1.deck).to.deep.equal(deck1);
    expect(round2.deck).to.deep.equal(deck2);
  });

  it('should start at the first card in the deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = createDeck([card1, card2, card3]);
    const deck2 = createDeck(prototypeData);
    const round1 = createRound(deck1);
    const round2 = createRound(deck2);

    expect(round1.currentCard).to.deep.equal(card1);
    expect(round2.currentCard).to.deep.equal(prototypeData[0]);
  });

  it('should start with 0 turns', function() {
    const deck = createDeck(prototypeData);
    const round = createRound(deck);

    expect(round.turns).to.deep.equal(0);
  });

  it('should start with an empty array of incorrectly guessed cards', function() {
    const deck = createDeck(prototypeData);
    const round = createRound(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

describe('takeTurn', function() {
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should update the turns count', function () {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.turns).to.deep.equal(0);

    takeTurn('sea otter', round);

    expect(round.turns).to.deep.equal(1);

    takeTurn('gallbladder', round);

    expect(round.turns).to.deep.equal(2);
  });

  it('should replace current card with next card', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.currentCard).to.deep.equal(card1);

    takeTurn('sea otter', round);

    expect(round.currentCard).to.deep.equal(card2);

    takeTurn('gallbladder', round);

    expect(round.currentCard).to.deep.equal(card3);
  });

  it('should store each incorrectly guessed card', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    
    expect(round.incorrectGuesses).to.deep.equal([]);

    takeTurn('pug', round);

    expect(round.incorrectGuesses).to.deep.equal([card1]);

    takeTurn('spleen', round);

    expect(round.incorrectGuesses).to.deep.equal([card1, card2]);

    takeTurn('Fitzgerald', round);

    expect(round.incorrectGuesses).to.deep.equal([card1, card2]);
  });

  it('should return feedback whether guess is correct or not', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    const turn1 = takeTurn('pug', round);

    expect(turn1).to.deep.equal('incorrect!')

    const turn2 = takeTurn('gallbladder', round);

    expect(turn2).to.deep.equal('correct!');
  });
});

describe('calculatePercentCorrect', function() {
  it('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should calculate and return the percentage of correct guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    takeTurn('sea otter', round);

    const percentCorrect1 = calculatePercentCorrect(round);

    expect(percentCorrect1).to.deep.equal(100);

    takeTurn('spleen', round);

    const percentCorrect2 = calculatePercentCorrect(round);

    expect(percentCorrect2).to.deep.equal(50);
  });
});

describe('endRound', function() {
  it('should be a function', function() {
    expect(endRound).to.be.a('function');
  });

  it('should end round and print correct guess percentage', function() {
    const deck1 = createDeck(prototypeData);
    const round1 = createRound(deck1);

    takeTurn('object', round1);

    const end1 = endRound(round1);

    expect(end1).to.deep.equal(`** Round over! ** You answered ${100}% of the questions correctly!`);

    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck2 = createDeck([card1, card2, card3]);
    const round2 = createRound(deck2);

    takeTurn('capybara', round2);

    const end2 = endRound(round2);

    expect(end2).to.deep.equal(`** Round over! ** You answered ${0}% of the questions correctly!`);
  });
});