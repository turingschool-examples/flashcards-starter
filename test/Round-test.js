const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let round, deck, card1, card2, card3;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', function() {
    // const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a first card', function() {
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(deck.allCards[0])
  });

  it('should increase number of turns', function() {

    round.returnCurrentCard();
    round.takeTurn('pug');

    expect(round.turns).to.equal(1);
  });

  it('should instantiate a new Turn object when a new turn has been taken', function() {

    round.returnCurrentCard();
    round.takeTurn('pug');

    const turn = new Turn('pug', card1);

    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should move to the next card after a turn has been taken', function() {

    round.returnCurrentCard();
    round.takeTurn('pug');
    var currentCard = round.returnCurrentCard();

    // const turn = new Turn();
    expect(currentCard).to.deep.equal(card2);
  })

  it('should determine whether a guess is wrong', function() {
    const turn = new Turn('pug', card1);

    round.returnCurrentCard();
    round.takeTurn('pug');

    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should determine whether an answer is correct', function() {

    const turn = new Turn('gallbladder', card2);
    round.returnCurrentCard();
    round.takeTurn('gallbladder');

    expect(turn.evaluateGuess()).to
      .equal(true);
  })

  it('should tell user if guess was incorrect', function() {

    const turn = new Turn('pug', card1);
    round.returnCurrentCard();
    round.takeTurn('pug');
    expect(turn.giveFeedback()).to.equal('incorrect!');

  })

  it('should tell user if guess was correct', function() {

    const turn = new Turn('gallbladder', card2);
    round.returnCurrentCard();
    round.takeTurn('gallbladder');

    let feedback = turn.giveFeedback();

    expect(feedback).to.equal('correct!');
  })

  it('should add the id of the card  to the incorrect guesses array if the answer is wrong', function() {
    round.returnCurrentCard();
    round.takeTurn('pug');

    expect(round.incorrectGuesses).to.deep.equal([round.deck.allCards[round.turns - 1].id]);
  })

  it('should calculate the percentage of correct guesses', function() {
    round.returnCurrentCard();
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music');
    round.calculatePercentCorrect();

    var correctGuesses = deck.allCards.length - round.incorrectGuesses.length;
    var percentageCorrect = (correctGuesses / deck.allCards.length) * 100;

    expect(round.calculatePercentCorrect()).to.equal(Math.floor(percentageCorrect));
  })
});
