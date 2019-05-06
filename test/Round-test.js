const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')

describe('Round', function () {
  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the current card being played', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck(card)
    const round = new Round(deck)
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.equal(deck.card[0])
  })

  it('should update turns count', function () {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn(card1, 'sea otter');

    expect(round.turns).to.equal(0);
    round.takeTurn()
    expect(round.turns).to.equal(1);
    round.takeTurn()
    expect(round.turns).to.equal(2);
    round.takeTurn()
    expect(round.turns).to.equal(3)
  })

  it('should evaluate guesses, and give feedback', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!')
    expect(round.incorrectGuesses[0]).to.equal(card2.id)
    expect(round.takeTurn('Fitzgerald')).to.equal('correct!');
  })

  it('should store ids of incorrect guesses', function () {
    const card1 = new Card(1, 'question 1', ['incorrect', 'incorrect', 'correctAnswer'], 'correctAnswer')
    const card2 = new Card(2, 'question 2', ['incorrect', 'incorrect', 'correctAnswer'], 'correctAnswer')
    const card3 = new Card(3, 'question 3', ['incorrect', 'incorrect', 'correctAnswer'], 'correctAnswer')
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn('correctAnswer')
    round.takeTurn('incorrect answer')
    round.takeTurn('correctAnswer')
    expect(round.incorrectGuesses).to.deep.equal([card2.id])
  })

  it('should calculate and return the percentage of correct guesses', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn(card1, 'sea otter');

    round.takeTurn('pug')
    round.takeTurn('gallbladder')
    round.takeTurn('Fitzgerald')
    expect(round.calculatePercentCorrect()).to.equal(66)
  })

  it('should print a message with the percent correct to the console once you run out of cards in the deck', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn(card1, 'sea otter');

    round.takeTurn('pug')
    round.takeTurn('gallbladder')
    round.takeTurn('William')

    assert.isFunction(round.endRound)

  })
})