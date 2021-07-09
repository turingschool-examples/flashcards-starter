const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1, card2, card3, cards, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What author invented the detective story?', ['Poe', 'Doyle', 'Gaboriau'], 'Poe');
    card2 = new Card(2, 'Where did Sherlock Holmes confront Professor Moriarty?',['Victoria Falls', 'Reichenbach Falls', 'Bushkill Falls'],'Reichenbach Falls');
    card3 = new Card(3, 'What was the profession of G.K. Chestertons famous detective?',['Police Officer', 'Socialite', 'Catholic Priest'],'Catholic Priest');
    cards = [card1, card2, card3]
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    const round = new Round()

    expect(Round).to.be.a('function');
  })

  it('should have a method to return current card', function() {

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should update turns count', function() {

    expect(round.turns).to.equal(0);
    round.takeTurn("3");
    expect(round.turns).to.equal(1);
  })

  it('takeTurn should store incorrect guesses to array', function() {

    round.takeTurn('array');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('takeTurn returns correct or incorrect', function() {

    expect(round.takeTurn('function')).to.equal('Your answer of function is incorrect!');
  });

  it('takeTurn should update card in use', function() {

    round.takeTurn('function');

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('function');

    expect(round.returnCurrentCard()).to.equal(card3);
    expect(round.turns).to.equal(2);
  });

  it('calculatePercentCorrect should return percentage of correct guesses', function() {

    round.takeTurn('Poe');
    expect(round.calculatePercentCorrect()).to.equal(100);

  });

  it('endRound method should return correct answer percentage', function() {
    let currentCard = card1;
    round.takeTurn('Poe');
    round.takeTurn('Victoria Falls');
    round.takeTurn('Police Officer');
    expect(round.endRound()).to.equal('You got 33% correct!');

  });

})
