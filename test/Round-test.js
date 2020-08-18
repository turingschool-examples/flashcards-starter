let chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
let card;
let turn;
let deck;
let round;

describe('Round', function() {
  beforeEach((done) => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
    deck = new Deck([card1, card2, card3]);
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
    expect(round.deck).to.eql([card1, card2, card3]);
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
    round.takeTurn();
    expect(round.turns).to.eql(1);
    round.takeTurn();
    expect(round.turns).to.eql(2);
  });  

  it('should evaluate guesses', function() {
    let choice = round.takeTurn('object');
    expect(choice).to.eql('correct!');
    choice = round.takeTurn('array')
    expect(choice).to.eql('incorrect!');
  });  

  it('should shift the deck', function() {
    expect(round.returnCurrentCard().id).to.eql(1);
    round.takeTurn()
    expect(round.returnCurrentCard().id).to.eql(2);
  });  

  it('should add incorrect ID to array', function() {
    round.takeTurn('array');
    expect(round.incorrectGuesses[0]).to.eql(1);
    round.takeTurn('object');
    expect(round.incorrectGuesses[0]).to.eql(1);
    round.takeTurn('string');
    expect(round.incorrectGuesses.length).to.eql(2);
  });  

  it('should calculate correct percent', function() {
    round.takeTurn('array');
    round.takeTurn('object');
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.eql(33);
  });  

});