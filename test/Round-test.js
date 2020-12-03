const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  var card1;
  var card2;
  var card3;
  var deck;
  var round;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });
  
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be able to instantate a Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a Deck as an argument and store it', function() {
    expect(round.deck).to.equal([card1, card2, card3]);
  });

  it('should instantiate with an empty array as incorrectGuesses', function() {
    expect(round.incorrectGuesses).to.equal([]);
  });

  it('should instantiate with zero set as the default value for turns', function() {
    expect(round.turns).to.equal(0);
  });

  describe('round.returnCurrentCard', function() {
    it('should be a function', function() {
      expect(round.returnCurrentCard).to.be.a('function');
    });

    it('should return the current card', function () {
      expect(round.currentCard).to.equal(card1);
    });
  });

  describe('round.takeTurn', function() {

    it('should be a function', function() {
      expect(round.takeTurn).to.be.a('function');
    });

    //Better test for this???
    it('should instantiate a turn when taking a turn', function() {
      expect(round.turn).to.be.an.instanceOf(Turn);
    });

    it('should return correct when guess is right', function() {
      let correctAnswer = round.takeTurn('sea otter');
      expect(correctAnswer).to.equal('correct!');
    });

    it('should return incorrect when guess is wrong', function() {
      let incorrectAnswer = round.takeTurn('pug');
      expect(incorrectAnswer).to.equal('incorrect!');
    });

    it('should update the turn count when correct or incorrect', function () {
      round.takeTurn('sea otter');
      expect(round.turns).to.equal(1);

      round.takeTurn('a bad answer');
      expect(round.turns).to.equal(2);
    });

    it('should make the next card the current card', function() {
      expect(round.currentCard).to.equal(card2);
    });

    it('should evaluate the guess and store incorrect guesses by id', function() {
      round.takeTurn('a bad answer');
      expect(round.incorrectAnswers.length).to.not.equal(0);
    });
  });

  describe('round.calculatePercentCorrect', function() {
    it('should be a function', function() {
      expect(round.calculatePercentCorrect).to.be.a('function');
    });

    it('should calculate percent of correct answers', function() {
      let winPercent = round.calculatePercentCorrect()
      expect(winPercent).to.equal(100);
    })
  })

  

});