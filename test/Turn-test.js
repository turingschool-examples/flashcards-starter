const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){
  it('should be a function', function(){
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function(){
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take a player\s guess as an argument', function(){
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should take in any string as the guess of the player', function(){
    const turn = new Turn('poodle');
    expect(turn.guess).to.equal('poodle');
  });

  it('should use a card for the current guess', function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.cardInPlay).to.equal(card);
  });

  it('should return the guess of a player', function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the card in play', function(){
    const card2 = new Card(2, 'What is Renee\s favorite animal?', ['dolphin', 'elephant', 'lion'], 'elephant');
    const turn = new Turn('dolphin', card2);
    turn.returnCard();

    expect(turn.returnCard()).to.equal(card2);
  });

  it('should return true if the player\s guess is correct', function(){
    const card2 = new Card(2, 'What is Renee\s favorite animal?', ['dolphin', 'elephant', 'lion'], 'dolphin');
    const turn = new Turn('dolphin', card2);
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the player\s guess is incorrect', function(){
    const card2 = new Card(2, 'What is Renee\s favorite animal?', ['dolphin', 'elephant', 'lion'], 'dolphin');
    const turn = new Turn('lion', card2);
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should tell the user if their guess is correct', function(){
    const card2 = new Card(2, 'What is Renee\s favorite animal?', ['dolphin', 'elephant', 'lion'], 'dolphin');
    const turn = new Turn('dolphin', card2);
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should tell the user if their guess is incorrect', function(){
    const card2 = new Card(2, 'What is Renee\s favorite animal?', ['dolphin', 'elephant', 'lion'], 'dolphin');
    const turn = new Turn('lion', card2);
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});
