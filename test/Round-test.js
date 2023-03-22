const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
let Turn = require('../src/Turn');

let round;
let card;
let deck;
let turn;

describe('Round', () => {
  
  beforeEach(() => {
    card1 = new Card(24, 
    "Object.assign() can take in an indefinite amount of arguments", 
    ["true", "false"], 
    "true");
    card2 = new Card(28, 
    "Which prototype method returns an array of an object's property values?", 
    ["Object.keys()", "Object.values()", "Object.assign()"], 
    "Object.values()");
    card3 = new Card(29, 
    "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", 
    ["true", "false"], 
    "true");
    card4 = new Card(22,
  "Which prototype method is used to iterate over each property of an object?",
  ["Object.keys()", "Object.values()", "reduce()"],
  "Object.keys()");
    turn1 = new Turn("true", card1);
    turn2 = new Turn("Object.keys()", card2);
    turn3 = new Turn("true", card3);
    turn4 = new Turn("Object.values()", card4);
    deck = new Deck([card1, card2, card3, card4]); 
    round = new Round(deck);
  }); 

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of round', () => {
    expect(round).to.be.instanceof(Round);
  });

  it('should have a default turns value of 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should have an empty array to store incorrect guesses',  () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should return current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0])
  });

  it('should increase the turn count each turn', () => {
    round.takeTurn();
    expect(round.turns).to.equal(1);
    round.takeTurn();
    expect(round.turns).to.equal(2);
  });

  it('should evaluate guesses each turn', () => {
    round.takeTurn(turn1.guess);
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn(turn2.guess)
    expect(round.incorrectGuesses).to.deep.equal([28])
  });

  it('should give feedback', () => {
    expect(round.takeTurn(turn3.guess)).to.equal('correct!');
  });

  it('should store id of incorrect guesses', () => {
    round.takeTurn(turn1.guess);
    round.takeTurn(turn2.guess);
    expect(round.incorrectGuesses).to.include(turn2.card.id)
  });

  // it.skip('should create a new Turn instance after guess', () => {
  //   const guess = "something"

  //   expect(round.makeguess(guess)).to.be.instanceof(Turn);
  // });

  it('should increase turn count if a guess is incorrect', () => {
    round.takeTurn(turn1.guess);
    expect(round.turns).to.equal(1);
    round.takeTurn(turn2.guess);
    expect(round.turns).to.equal(2);
    expect(round.takeTurn(turn2.guess)).to.equal('incorrect!');
  }); 

  it('the next card in line will become the current card', () => {
    const secondCard = deck.cards[1];
    round.takeTurn();
    expect(secondCard).to.deep.equal(card2);
  });

  it('should return the percentage of correct answers', () => {
    round.takeTurn(turn1.guess);
    round.takeTurn(turn2.guess);
    round.takeTurn(turn3.guess);
    round.takeTurn(turn4.guess);

    round.calculatePercentCorrect();

    expect(round.percentCorrect).to.equal(50);
  });

  it('should end round', () => {
    round.takeTurn(turn1.guess);
    round.takeTurn(turn2.guess);
    round.takeTurn(turn3.guess);
    round.takeTurn(turn4.guess);

    round.calculatePercentCorrect();

    expect(round.endRound()).to.equal('Round Over! You answered 50% of the questions correctly!');
  });
}) 