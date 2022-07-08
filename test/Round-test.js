const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Tom\'s favorite music genre?', ['techno', 'metal', 'classic rock'], 'techno');
    card2 = new Card(2, 'What is Tom\'s favorite live music venue?', ['The Fillmore', 'Red Rocks', 'Mission Ballroom'], 'Red Rocks');
    card3 = new Card(3, 'Who is Tom\'s favorite music producer?', ['Adam Beyer', 'Joris Voorn', 'Eric Prydz'], 'Eric Prydz');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should be a new instance of Round', function() {

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should begin with the current card being the first card in the deck', function() {

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to return which card is currently being played', function() {

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to update the current card to the next card in the deck after a turn is taken', function() {

    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should return feedback telling the user whether the guess was correct or incorrect', function() {

    expect(round.takeTurn('techno')).to.equal('Correct!');
    expect(round.takeTurn('Mission Ballroom')).to.equal('Incorrect!');
  })

  it('should be able to store the id\'s of any cards that were incorrectly guessed', function() {

    expect(round.incorrectGuessIds).to.deep.equal([]);

    round.takeTurn('metal');
    expect(round.incorrectGuessIds).to.deep.equal([1]);
  })

  it('should be able to update the turn count when a turn is taken', function() {

    round.takeTurn();
    expect(round.turnCount).to.equal(1);

    round.takeTurn();
    expect(round.turnCount).to.equal(2);

    round.takeTurn();
    expect(round.turnCount).to.equal(3);
  });

  it('should be able to calculate the percent of quesions answered correctly', function() {

    round.takeTurn('techno');
    round.takeTurn('Red Rocks');
    round.takeTurn('Adam Beyer');
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should return a message that shows the percent of questions that were answered correctly', function() {

    round.takeTurn('techno');
    round.takeTurn('Red Rocks');
    round.takeTurn('Adam Beyer');
    expect(round.endRound()).to.equal('**Round over!** You answered 66% of the questions correctly!')
  });

});