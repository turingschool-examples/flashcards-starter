const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');


const Turn = require('../src/Turn');

describe.skip('Turn', function() {

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of a Turn', () => {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn)
  });

  it('should be able to return a user\'s guess', () => {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', sampleCard)

    expect(turn.returnGuess()).to.equal('sea otter')
  });

  it('should be able to return a card', () => {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', sampleCard)

    expect(turn.returnCard()).to.equal(sampleCard)
  });

  it('should be able to evaluate guess', () => {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', sampleCard)

    expect(turn.evaluateGuess()).to.equal(false)
  });

  it('should be able to give feedback', () => {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', sampleCard)

    expect(turn.giveFeedBack()).to.equal('correct!')
  });



})
