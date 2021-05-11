const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store current deck', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  }); 

  it('currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('returnCurrentCard returns the current card being played', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  }); 

  // it.skip('takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', () => {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);

  // }); 



// round.deck;   // => [card1, card2, card3];

// round.returnCurrentCard(); // => { id: 1,
//                            //      question: 'What is Robbie\'s favorite animal',
//                            //      answers: ['sea otter', 'pug', 'capybara'],
//                            //      correctAnswer: 'sea otter'
//                            //    }

// round.turns; // => 0

// round.incorrectGuesses;     // => []

// round.takeTurn('sea otter'); // => 'correct!'

// round.takeTurn('spleen');   // => 'incorrect!'

// round.turns; // => 2

// round.incorrectGuesses;     // => [14]

// round.returnCurrentCard();    // => { id: 12,
//             	              //      question: 'What is Travis\'s favorite stress reliever?',
//             	              //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
//             	              //      correctAnswer: 'playing with bubble wrap'
//             	              //    }

// round.calculatePercentCorrect(); // => 50

  // Your Round class will be the object that takes in responses and records these guesses
  // (as well as if they are correct or incorrect).
  // The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round

  // Your Round class should meet the following requirements:
  // returnCurrentCard: method that returns the current card being played
  // takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
  
  // When a guess is made, a new Turn instance is created.
  // The turns count is updated, regardless of whether the guess is correct or incorrect
  // The next card becomes current card
  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  // Feedback is returned regarding whether the guess is incorrect or correct
  // calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
  // endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’


});