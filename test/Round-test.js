const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {
  let cardOne, cardTwo, cardThree, cards, deck, round
  this.beforeEach(() => {

   cardOne = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")

   cardTwo = new Card(2, "What is a comma-separated list of related values?",["array", "object", "function"], "array");

   cardThree = new Card(3,
   "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

   cards = [cardOne, cardTwo, cardThree];
   deck = new Deck(cards);
   round = new Round(deck);
});

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should have a returnCurrentCard method that returns the first card in the deck', () => {
    const returnCurrentCard = round.returnCurrentCard();
    expect(returnCurrentCard).to.equal(cardOne);
  })

  it('should update turn count with takeTurn method', () => {
    round.takeTurn('object');
    expect(round.turnCount).to.equal(1);
  })

  it('should move second card in deck to current card', ()=> {
    round.takeTurn('No idea');
    expect(round.returnCurrentCard()).to.equal(cardTwo)
  })

  it('should store the ids of incorrect guesses', () => {
    round.takeTurn('No idea');
    expect(round.incorrectGuesses).to.deep.equal([ 2 ]);
  })

  it('should give feedback with takeTurn method', () => {
    let takeTurn = round.takeTurn('array');
    expect(takeTurn).to.equal('correct!')
    takeTurn = round.takeTurn('iteration method')
    expect(takeTurn).to.equal('incorrect!')
  })

  it('should calculate percentage of correctly answered questions', () => {
    round.takeTurn('who knows')
    round.takeTurn('mutator method')
    let correctPercent = round.calculatePercentCorrect()
    expect(correctPercent).to.equal(50)
  })

  it('should print round over message with correct answer percentage', () => {
    expect(round.endRound()).to.equal(`** Round over! ** You answered 0% of the questions correctly!`);
    round.takeTurn('array');
    expect(round.endRound()).to.equal(`** Round over! ** You answered 100% of the questions correctly!`);
  })

});


// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!'
