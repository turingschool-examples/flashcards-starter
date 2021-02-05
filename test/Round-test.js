const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  it('should return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck, 'sea otter');
    expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
  })

  it('amount of turns should update', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'sea otter')

    round.takeTurn()

    expect(round.turns).to.equal(1)

    round.takeTurn()

    expect(round.turns).to.equal(2)

    round.takeTurn()

    expect(round.turns).to.equal(3)
  })

  it('incorrectGuess array should increase for each incorrect guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'sea otter')

    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.equal(0);

    const card11 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card12 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card13 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck2 = new Deck([card1, card2, card3]);
    const round2 = new Round(deck, 'guess')

    round2.takeTurn('guess');
    expect(round2.incorrectGuesses.length).to.equal(1);
  })

  it('correct feedback displays', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'sea otter')

    expect(round.takeTurn('sea otter')).to.be.equal('correct!')

    const card11 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card12 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card13 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck2 = new Deck([card1, card2, card3]);
    const round2 = new Round(deck, 'guess')

    expect(round2.takeTurn('guess')).to.be.equal('incorrect!')
  })

  it('should evaluate correct percent of answers', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'sea otter')

    round.incorrectGuesses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(round.calculatePercentCorrect()).to.be.equal('50.00')

    const card11 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card12 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card13 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck2 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck2, 'sea otter')
    round1.incorrectGuesses = [1, 2, 3];

    expect(round1.calculatePercentCorrect()).to.be.equal('90.00')

    const card4 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card5 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card6 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck3 = new Deck([card1, card2, card3]);
    const round2 = new Round(deck2, 'sea otter')
    round2.incorrectGuesses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(round2.calculatePercentCorrect()).to.be.equal('66.67')
  })

  it('when the round ends console should display correct message', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'sea otter')
    round.incorrectGuesses = [1, 2, 3];

    expect(round.endRound()).to.be.equal('** Round over! ** You answered 90.00% of the questions correctly!')
  })

})
