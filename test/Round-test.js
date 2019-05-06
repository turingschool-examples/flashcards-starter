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

  it('should update turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn(card1, 'sea otter');

    expect(round.turns).to.equal(0);
    expect(round.returnCurrentCard()).to.equal(deck.card[0]);
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.equal(deck.card[1])
    round.takeTurn('spleen')
    expect(round.incorrectGuesses[0]).to.equal(2)
    expect(round.returnCurrentCard()).to.equal(deck.card[2])
    round.takeTurn('Fitzgerald');
    expect(round.incorrectGuesses.length).to.equal(1)

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

  it('will end the round once there are no more cards left in the deck', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn(card1, 'sea otter');



  })
})