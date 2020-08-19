let chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function() {
  beforeEach((done) => {
    card1 = new Card(prototypeQuestions[0])
    card2 = new Card(prototypeQuestions[1])
    card3 = new Card(prototypeQuestions[2])
    card4 = new Card(prototypeQuestions[3])
    card5 = new Card(prototypeQuestions[4])
    turn = new Turn();
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

  it('should return the card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });  

  it('should have a turn count', function() {
    expect(round.turns).to.eql(0);
  });  
  
  it('should store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.eql([]);
  });  

  it('should increase turn counter', function() {
    round.takeTurn('object');
    expect(round.turns).to.eql(1);
    round.takeTurn('array');
    expect(round.turns).to.eql(2);
  });  

  it('should evaluate guesses', function() {
    let choice = round.takeTurn('object');
    expect(choice).to.eql('correct!');
    choice = round.takeTurn('array');
    expect(choice).to.eql('correct!');
  });  

  it('should shift the deck', function() {
    expect(round.returnCurrentCard().id).to.eql(1);
    round.takeTurn()
    expect(round.returnCurrentCard().id).to.eql(2);
  });  

  it('should add incorrect ID to array', function() {
    round.takeTurn('object');
    expect(round.incorrectGuesses.length).to.eql(0);
    round.takeTurn('test');
    expect(round.incorrectGuesses.length).to.eql(1);
    round.takeTurn('test');
    expect(round.incorrectGuesses.length).to.eql(2);
  });  

  it('should calculate correct percent', function() {
    round.takeTurn('object');
    round.takeTurn('asdas');
    round.takeTurn('asdas');
    expect(round.calculatePercentCorrect()).to.eql(33);
    round.takeTurn('asdasda');
    round.takeTurn('asdasda');
    expect(round.calculatePercentCorrect()).to.eql(20);
  });  
  
});