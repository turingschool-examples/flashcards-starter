const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Data = require('../src/Data');
const Round = require('../src/Round');
const Turn = require('../src/Turn');


describe('Round', function() {

  it('should be a function', function() {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should be instantiated with a Deck', () => {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck)
  });

  it('should return current card being played', () => {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });

  it('turns should start at 0', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.turns).to.deep.equal(0)
  })

  it('incorrectGuesses should be an empty array', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('takeTurn should make a new Turn instance', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const round = new Round(deck);
    round.takeTurn(card.answers[0], card)
    expect(round.instantiateTurn()).to.be.an.instanceof(Turn);
  });

  it('should update Turn count', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const round = new Round(deck)
    expect(round.turns).to.equal(0)
    round.takeTurn(card.answers[0])
    expect(round.turns).to.equal(1)
  });

  it('should evaluate guess, incorrect guess ID is stored', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([])
    round.takeTurn(card1.answers[1])
    expect(round.incorrectGuesses).to.deep.equal([1])
  });

  it('should make next card in deck the current card', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(card1)
    round.takeTurn(card1.answers[0])
    expect(round.currentCard).to.equal(card2)
  });

  it('should return feedback of correct or incorrect', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn(card1.answers[0])).to.equal('correct!')
  });

  it('should be number of correct guesses', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.correctGuesses).to.equal(0)
    round.takeTurn(card1.answers[0])
    round.takeTurn(card2.answers[1])
    expect(round.correctGuesses).to.equal(1)
    round.takeTurn(card3.answers[2])
    expect(round.correctGuesses).to.equal(2)
  });

});