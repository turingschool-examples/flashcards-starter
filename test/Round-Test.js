const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

    it('the current card should be the first card in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const turn = new Turn('pug', card1)
    const deck1 = new Deck([card1, card2, card3]);
    const deck2 = new Deck([card2, card3]);
    const round1 = new Round(deck1)
    const round2 = new Round(deck2)
    expect(round1.returnCurrentCard()).to.equal(deck1.cards[0]);
    expect(round2.returnCurrentCard()).to.equal(deck2.cards[0]);
  });
  it('should count number of turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const turn = new Turn('pug', card1)
    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1)
    expect(round1.turns).to.equal(0);
    round1.takeTurn()
    expect(round1.turns).to.equal(1);
  });
  it('When a guess is made the next card becomes current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const turn = new Turn('pug', card1)
    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1)
    expect(round1.returnCurrentCard()).to.equal(deck1.cards[0]);
    round1.takeTurn()
    expect(round1.returnCurrentCard()).to.equal(deck1.cards[1]);
  });
  it('When a guess is made the user is given feedback', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1)
    expect(round1.takeTurn('sea otter')).to.equal(`correct!`);
    expect(round1.takeTurn('pug')).to.equal(`incorrect!`);
  });
  it('Guess is evaluated and incorrect guesses are stored via ID in the incorrectGuesses Array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1)
    expect(round1.incorrectGuesses).to.eql([])
    round1.takeTurn('pug')
    expect(round1.incorrectGuesses).to.eql([1])
    round1.takeTurn('spleen')
    expect(round1.incorrectGuesses).to.eql([1, 14])
    round1.takeTurn('Fitzgerald')
    expect(round1.incorrectGuesses).to.eql([1, 14])
  });
  it('Can calculate percent correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1)
    round1.takeTurn('pug')
    expect(round1.calculatePercentCorrect()).to.equal(0)
    round1.takeTurn('spleen')
    round1.takeTurn('Fitzgerald')
    expect(round1.calculatePercentCorrect()).to.equal(33)
  });
  it('will repeat incorrect questions', function() {
    
  });

});



