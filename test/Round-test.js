const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe ('Round', function() {
  it('should be a function', function() {
   const round = new Round();
   expect(Round).to.be.a('function')
  })

  it('should be an instance of round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round)
  })

  it('should keep track of the turns', function() {
    const round = new Round();
    expect(round.turns).to.equal(0)
  })

  it('should store a list of all the incorrect guesses', function() {
    const round = new Round();
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should return the current card being played', function() {
    const card1 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card (3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    expect(round.currentCard).to.equal(card1)
  })

  it('should take in a guess and increment turns', function() {
    const card1 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card (3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    round.takeTurn('array')
    expect(round.turns).to.equal(1) 
  })

  it('should store a list of incorrect guess ids', function() {
    const card1 = new Card (8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card (3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    round.takeTurn('array')
    expect(round.incorrectGuesses).to.deep.equal([8]) 
  })

  it('should cycle through cards in the deck', function() {
    const card1 = new Card (8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card (3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    round.takeTurn('array')
    round.newCurrentCard()
    expect(round.currentCard).to.equal(card2) 
  })

  it('should calculate the amount of questions answered correctly', function() {
    const card1 = new Card (8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card (3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    round.takeTurn('array')
    round.newCurrentCard()
    round.calculatePercentCorrect()
    expect(round.calculatePercentCorrect()).to.equal(100) 
  })

  it.skip('should display the amount of questions answered correctly', function () {
    const card1 = new Card (8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card (3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    round.takeTurn('array')
    round.newCurrentCard()
    round.calculatePercentCorrect()
    round.endRound()
    expect(round.endRound()).to.equal('**Round Over!** You answered 100% of the quesitons correctly!') 
  })

})