const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Turn', function() {

  // beforeEach(function() {
  //   const turn = new Turn();
  // });

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should have default states', function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    // const expectedCard = {
    //   id: 1,
    //   question: 'What is Robbie\'s favorite animal',
    //   answers: ['sea otter', 'pug', 'capybara'],
    //   correctAnswer: 'sea otter'
    // };

    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card)
    expect(turn.isCorrect).to.equal(false);
  });

  it('should return the user guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.guess).to.equal('pug');
  }); 

  it('should return the card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should evaluate the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', Card);
    turn.evaluateGuess('pug', Card)
    expect(turn.isCorrect).to.equal(false);
  }); 
  
  it('should give feedback on the guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('pug', card1, round);

    expect(turn.giveFeedback()).equal("Incorrect!");
  }); 
});