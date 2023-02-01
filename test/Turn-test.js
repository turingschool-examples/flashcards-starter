const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card, turn;
  
  beforeEach('turn instance', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user guess', () => {
    expect(turn.guess).to.equal('pug');
    expect(turn.guess).to.be.a('string');
  });  

  it('should store the current card in play', () => {
    expect(turn.chosenCard).to.be.an.instanceof(Card);
    expect(turn.chosenCard).to.be.an('object');
    expect(turn.chosenCard.id).to.equal(1);
  });  

  it('should be able to show guess', () => {
    const showGuess = turn.returnGuess()

    expect(showGuess).to.be.a('string');
    expect(showGuess).to.equal('pug');
  });

  it('should be able to show current card', () => {
    const showCard = turn.returnCard()

    expect(showCard).to.be.an('object');
    expect(showCard.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });
  
  it('should be able to determine if user guess is NOT correct', () => {
    const checkAnswer = turn.evaluateGuess()

    expect(checkAnswer).to.be.a('boolean');
    expect(checkAnswer).to.equal(false);
    expect(card.correctAnswer).to.equal('sea otter');
    expect(turn.guess).to.equal('pug');
    expect(turn.match).to.equal(false);
  });

  it('should be able to determine if user guess IS correct', () => {
    turn = new Turn('sea otter', card)
    const checkAnswer = turn.evaluateGuess()

    expect(checkAnswer).to.be.a('boolean');
    expect(checkAnswer).to.equal(true);
    expect(card.correctAnswer).to.equal('sea otter');
    expect(turn.guess).to.equal('sea otter');
    expect(turn.match).to.equal(true);

  });

  it('should be able to tell user if they NOT correct', () => {
    expect(turn.match).to.be.null

    const checkAnswer = turn.evaluateGuess()
    const tellUser = turn.giveFeedback()

    expect(checkAnswer).to.equal(false);
    expect(turn.match).to.equal(false);
    expect(tellUser).to.be.a('string');
    expect(tellUser).to.equal('incorrect!');
  });

  it('should be able to tell user if they ARE correct', () => {
    turn = new Turn('sea otter', card)

    expect(turn.match).to.be.null

    const checkAnswer = turn.evaluateGuess()
    const tellUser = turn.giveFeedback()
    
    expect(checkAnswer).to.equal(true);
    expect(turn.match).to.equal(true);
    expect(tellUser).to.equal('correct!');
  });
  
});