let chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const data = require('../src/data');

const prototypeQuestions = data.prototypeData;

describe('Round Architecture', function() {
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let deck;
  let round;
  beforeEach((done) => {
    card1 = new Card(prototypeQuestions[0])
    card2 = new Card(prototypeQuestions[1])
    card3 = new Card(prototypeQuestions[2])
    card4 = new Card(prototypeQuestions[3])
    card5 = new Card(prototypeQuestions[4])
    deck = new Deck([card1, card2, card3, card4, card5]);
    round = new Round(deck);
    done();
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have a deck', function() {
    expect(round.deck).to.eql([card1, card2, card3, card4, card5]);
  });   

  it('should have a turn count', function() {
    expect(round.turns).to.eql(0);
  });  

  it('should store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.eql([]);
  });  
});  

describe('takeTest method', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let currentCard;
  beforeEach((done) => {
    card1 = new Card(prototypeQuestions[0])
    card2 = new Card(prototypeQuestions[1])
    card3 = new Card(prototypeQuestions[2])
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    currentCard = round.returnCurrentCard();
    guess = round.takeTurn('testGuess');
    done();
  });
  it('should store a guess', function() {
    expect(round.guess).to.eql('testGuess');
  });  

  it('should store current turn', function() {
    expect(round.turn).to.be.an.instanceof(Turn);
  });  

  it('should return the card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card2);
  });  

  it('should store the current card', function() {
    expect(currentCard).to.eql(prototypeQuestions[0]);
  });  

  it('should store current turn', function() {
    round.createTurn();
    expect(round.turn).to.be.an.instanceof(Turn);
  });  

  it('should evaluate guesses are true', function() {
    round.takeTurn('wrong')
    expect(round.evaluateGuess()).to.eql('incorrect!');
  });  

  it('should evaluate guesses are false', function() {
    round.takeTurn('array');
    expect(round.evaluateGuess()).to.eql('incorrect!');
  });  

  it('should add incorrect ID to array', function() {
    round.handleResult()
    round.handleResult()
    expect(round.incorrectGuesses.length).to.eql(3);
  });  

  it('should not add correct ID to array', function() {
    round.takeTurn('object');
    round.takeTurn('object');
    expect(round.incorrectGuesses.length).to.eql(1);
  });  

  it('should increase turn counter after every turn', function() {
    round.incrementTurn();
    round.incrementTurn();
    expect(round.turns).to.eql(3);
  });  

  it('next card should become current card after every turn', function() {
    round.shiftDeck();
    expect(round.deck[0].id).to.eql(3);
  });  

  it('should calculate correct percent', function() {
    round.takeTurn('object');
    round.takeTurn('wrong');
    expect(round.calculatePercentCorrect()).to.eql(33);
  });  
});