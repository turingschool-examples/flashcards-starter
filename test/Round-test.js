let chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function() {
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

  it('should return the card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });  

  it('should increase turn counter after every turn', function() {
    round.takeTurn('object');
    expect(round.turns).to.eql(1);
    round.takeTurn('array');
    expect(round.turns).to.eql(2);
  });  

  it('next card should become current card after every turn', function() {
    expect(round.returnCurrentCard().id).to.eql(1);
    round.takeTurn()
    expect(round.returnCurrentCard().id).to.eql(2);
    round.takeTurn()
    expect(round.returnCurrentCard().id).to.eql(3);
  });  

  it('should evaluate guesses', function() {
    let choice = round.takeTurn('object');
    expect(choice).to.eql('correct!');
    choice = round.takeTurn('array');
    expect(choice).to.eql('correct!');
    choice = round.takeTurn('array');
    expect(choice).to.eql('incorrect!');
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
    round.takeTurn('wrong');
    round.takeTurn('wrong');
    expect(round.calculatePercentCorrect()).to.eql(33);
    round.takeTurn('wrong');
    round.takeTurn('wrong');
    expect(round.calculatePercentCorrect()).to.eql(20);
  });  

  it('should have a bonus round', function() {
    round.incorrectGuesses = [1, 2, 3, 4,5]
    let yeet = round.bonusRound()
    expect(yeet.length).to.eql(5);
  });  

});