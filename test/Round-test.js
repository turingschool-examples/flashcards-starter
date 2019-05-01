const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function () {

  it('should be a function', function () {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round class', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  //Test that the currentCard should be first in the Deck array?

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);

  round.deck   // => [card1, card2, card3];
    //Test that contents of round.deck match above.

 //round.returnCurrentCard() // => { id: 1,
  //      question: 'What is Robbie\'s favorite animal',
  //      answers: ['sea otter', 'pug', 'capybara'],
  //      correctAnswer: 'sea otter' 
  //    }

  round.turns // => 0
    //Test that round.turns evaluates to 0 (by default? Later more?)

  round.incorrectGuesses     // => []

  round.takeTurn('capybara') // => 'correct!' 

  round.takeTurn('spleen')   // => 'incorrect!'

  round.turns // => 2

  round.incorrectGuesses     // => [14]

  //round.currentCard()    // => { id: 12,
  //      question: 'What is Travis\'s favorite stress reliever?',
  //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
  //      correctAnswer: 'playing with bubble wrap' 
  //    }

  round.calculatePercentCorrect() // => 50 

});