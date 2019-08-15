
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

let card1, card2, card3, card4, turn1, turn2, turn3, deck, round;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(12, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(14, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  turn1 = new Turn('sea otter', card1);
  turn2 = new Turn('spleen', card2);
  turn3 = new Turn('Fitzgerald', card3);
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
});


describe('Round', function() {


  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return current card', function () {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  }); 

  it('should give incorrect guess feedback', function () {
    let result = round.takeTurn(turn2.guess);
    expect(round.takeTurn()).to.equal('incorrect!');
  }); 

  it('should give correct guess feedback', function () {
    let result = round.takeTurn(turn1.guess);
    expect(result).to.equal('correct!');
  }); 

  it('should update turn count', function () {
    round.takeTurn()
    expect(round.turn).to.equal(1);
  });  
  
  it('should turn next card into current card', function () {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(deck.cards[1]);
  });


  it('should evaluate guess and store incorrect guess', function () {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(deck.cards[1]);
  });  


  it('should calculate the percentage of correct guesses', function () {
    round.takeTurn(turn1.guess);
    expect(round.calculatePercentageCorrect()).to.equal(100);
    round.takeTurn(turn2.guess);
    expect(round.calculatePercentageCorrect()).to.equal(50);
    round.takeTurn(turn3.guess);
    expect(round.calculatePercentageCorrect()).to.equal(67);
  });

  it('should print percentage when game ends', function () {
    round.takeTurn(turn1.guess);
    round.takeTurn(turn2.guess);
    round.takeTurn(turn3.guess);

    expect(round.endRound()).to.equal(`You answered 67% of the questions correctly`);
  });
});