const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  
  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });
  // should return the current card being played
    // setup: instantiate a new round, and card,  deck
    // execution: call the return current card method
    //  assertion: assert that the output from the current card method
    //  is equal to the card passed in 
    it('should return the current card', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);
      // console.log(round.deck.cards[0].id)

      const actualResult = round.returnCurrentCard();

      expect(actualResult).to.equal(card1);
      expect(actualResult).to.not.equal(card2);
  
    });
    //  take turn method
    // it should update the turns count 
    // setup: instantiate card turn round classes
    // execution: run the update turn method
    //  assertion: check if round.turns is been incremented 
    it('should update turns count', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn('sea otter');
      assert.equal(round.turnCount, 1);
      round.takeTurn('gallbladder');
      assert.equal(round.turnCount, 2);

    });

    it('should not update turn count if no guess is made', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);
      let noGuess = round.takeTurn();
      assert.equal(noGuess, 'please make a guess');
      assert.equal(round.turnCount, 0);
    });
    
    // it should evaluate guesses,
      // setup: instantiate the round turn and card class
      // execution: run the take turn method
      // assertion: check if the guess has been evaluated
    it('should evaluate correct guesses', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      const correctGuess = round.takeTurn("sea otter");


      assert.equal(correctGuess, 'correct');

    });

    it('should evaluate incorrect guesses', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      const inCorrectGuess = round.takeTurn("pug");


      assert.equal(inCorrectGuess, 'incorrect');

    });


    // it should give feedback,
      // setup: instantiate the round, turn, card classes
      // execution: run the take turn method
      // assertion: assert if feed back has been given
    it.skip('should give feedback', () => {});
    
    // it should store id's of incorrect guesses in an array with the id.
      // setup: instantiate the round, turn, card classes
      //  execution: run the take turn method
      // assertion: assert if the id of incorrect guesses has been stored
    it('should store ids of incorrect guesses', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      const inCorrectGuess = round.takeTurn("pug");
      let incorrectIds = round.incorrectGuesses[0];

      assert.equal(incorrectIds, 1);
    });

    // calculatePercentCorrect: method that calculates 
    // and returns the percentage of correct guesses
      // setup: instantiate the round card and turn classes
        // take a couple of turns  with correct and incorrect guesses
      // execution: run calculatePercentageCorrect():
      // assertion: the result is equal to the expected percentage
    it('should calculate and return the percentage of correct guesses', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      const inCorrectGuess = round.takeTurn("pug");
      const correctGuess1 = round.takeTurn("gallbladder");
      const correctGuess2 = round.takeTurn("playing with bubble wrap");
      let expectedPercentage = 67;
      let actualPercentage = round.calculatePercentageCorrect();

      assert.equal(actualPercentage, expectedPercentage);
    });


    // endRound: method that prints the following to the console: 
    // ‘** Round over! ** You answered <>% of the questions correctly!’
    // setup: instantiate round, card, and turn classes
    // execution: take a couple of turns both with correct and incorrect
      // guesses
      // run the end round method
    // assertion: the following statement is logged to the console with the correct percentage:
      // ‘** Round over! ** You answered <>% of the questions correctly!’
    it('should print the end round message to the console', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      const inCorrectGuess = round.takeTurn("pug");
      const correctGuess1 = round.takeTurn("gallbladder");
      const correctGuess2 = round.takeTurn("playing with bubble wrap");

      let roundResult = round.endRound();

      assert.equal(roundResult, "** Round over! ** You answered 67% of the questions correctly!");

    });

});


/*
Your Round class should meet the following requirements:
returnCurrentCard: method that returns the current card being played
takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

When a guess is made, a new Turn instance is created.
The turns count is updated, regardless of whether the guess is correct or incorrect
The next card becomes current card
Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
Feedback is returned regarding whether the guess is incorrect or correct
calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
*/