const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  it.skip('should be a function', () => {
    var turn = new Turn;

    expect(turn).to.be.a('function');
  })

  it.skip('should be a new instance of Turn', () => {
    var turn = new Turn;

    expect(turn).to.be.an.instanceOf(Turn);
  })

  it.skip('should take the player\'s guess as an argument', () => {
    var turn = new Turn('gary');

    expect(turn.guess).to.equal('gary');
  })

  it.skip('player\'s guess should be a string', () => {
    var turn = new Turn('pancakes');

    expect(turn.guess).to.be.a('string');
  })

  it.skip('should take an instance of card as an argument', () => {
    var card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    var turn = new Turn('pants', card);
    var testCard = {
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    }

    expect(turn.card).to.eql(testCard);
  })

  it.skip('should have a method that returns the guess', () => {
    var turn = new Turn('carrot cake');
    var guess = turn.returnGuess();

    expect(turn.guess).to.equal(guess);
  })

  it.skip('should have a method that returns the card', () => {
    var card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    var turn = new Turn('Jake from State Farm', card);
    var testCard = {
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    }
    var returnedCard = turn.returnCard();

    expect(returnedCard).to.eql(testCard);
  })

  it.skip('should be able to determine if the answer is correct', () => {
    var card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    var card2 = new Card(2, 'What is the best 2000\'s emo band?', ['Emery', 'My Chemical Romance', 'The Starting Line', 'Mae', 'Copeland', 'Senses Fail'], 'Copeland');
    var turn = new Turn('sea otter', card);
    var turn2 = new Turn('My Chemical Romance', card2);
    
    var cardAnswer = turn.evaluateGuess();
    var card2Answer = turn2.evaluateGuess();

    expect(cardAnswer).be.true;
    expect(card2Answer).be.false;
  })

  it.skip('should tell the player is their answer was correct or incorrect', () => {
    var card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    var card2 = new Card(2, 'What is the best 2000\'s emo band?', ['Emery', 'My Chemical Romance', 'The Starting Line', 'Mae', 'Copeland', 'Senses Fail'], 'Copeland');
    var turn = new Turn('sea otter', card);
    var turn2 = new Turn('My Chemical Romance', card2);
    
    var feedback = turn.giveFeedback();
    var feedback2 = turn2.giveFeedback();

    expect(feedback).to.equal('correct!');
    expect(feedback2).to.equal('incorrect!');
  })

})