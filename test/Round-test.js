const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Data = require('../src/Data');
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
    round.takeTurn()
    expect(round.takeTurn()).to.be.an.instanceof(Turn);
  });

  it('should update Turn count', () => {
    const round = new Round()
    expect(round.turns).to.equal(0)
    round.takeTurn()
    expect(round.turns).to.equal(1)
    round.takeTurn()
    round.takeTurn()
    round.takeTurn()
    expect(round.turns).to.equal(4)
  });

  it.skip('should make next card in deck the current card', () => {

  });

  it.skip('should evaluate guess, incorrect guess ID is stored', () => {
    //Turn class give true or false
  });

  it.skip('should return feedback of correct or incorrect', () => {
    //Turn class does this
  });

});