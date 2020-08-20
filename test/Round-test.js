let chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
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

  it('should evaluate guesses are correct', function() {
    expect(round.takeTurn('object')).to.eql('correct!');
  });  

  it('should evaluate guesses are wrong', function() {
    expect(round.takeTurn('array')).to.eql('incorrect!');
  });  

  it('should keep track of the turn', function() {
    round.takeTurn();
    round.takeTurn();
    expect(round.turns).to.equal(2);
  });  

  it('should add incorrect ID to array', function() {
    round.takeTurn('array')
    expect(round.incorrectGuesses).to.eql([1]);
  });  

  it('should not add correct ID to array', function() {
    round.takeTurn('object')
    expect(round.incorrectGuesses).to.eql([]);
  });  

  it('should return the card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });  

  it('next card should become current card after every turn', function() {
    round.takeTurn();
    expect(round.returnCurrentCard().id).to.eql(2);
  });  

  it('should calculate correct percent', function() {
    round.takeTurn('object');
    round.takeTurn('wrong');
    round.takeTurn('wrong');
    expect(round.calculatePercentCorrect()).to.eql(33);
  });  
});