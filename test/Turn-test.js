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

  it.skip()

})