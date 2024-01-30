const chai = require('chai');
const expect = chai.expect;

const { 
  createCard, 
  evaluateGuess,
  countCards,
  createRound
} = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

  it('should determine if an answer is correct', function() {
    const sunCard = createCard(2, 'What color is the sun?', 'white', 'white');
    const sunQuestion = evaluateGuess(sunCard.answers, sunCard.correctAnswer)

    expect(sunQuestion).to.equal('correct!') 
  })
  
  it('should determine if an answer is incorrect', function() {
    const moonCard = createCard(3, 'What is the moon made of?', 'cheese', 'moon rocks?');
    const moonQuestion = evaluateGuess(moonCard.answers, moonCard.correctAnswer)

    expect(moonQuestion).to.equal('incorrect!') 
  })

  it('should count the cards in a deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = countCards([card1, card2, card3]);

    expect(deck.length).to.deep.equal(3)
  });

  it('should count more the cards in a deck', function() {
    const card1 = createCard(2, 'What is Jasmine\'s favorite color', ['blue', 'green', 'purple'], 'green');
    const card2 = createCard(15, 'What city was Alex born in?', ['New York', 'London', 'Tokyo'], 'London');
    const card3 = createCard(13, 'What sport does Mia play?', ['soccer', 'basketball', 'tennis'], 'tennis');
    const card4 = createCard(3, 'What is Marco\'s favorite cuisine?', ['Italian', 'Mexican', 'Japanese'], 'Japanese');
    const card5 = createCard(16, 'Which instrument does Sara play?', ['piano', 'violin', 'guitar'], 'piano');
    const deck = countCards([card1, card2, card3, card4, card5]);

    expect(deck.length).to.deep.equal(5)
  });

  it('should create a round to organize guesses and records', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = countCards([card1, card2, card3]);

    const round = createRound(deck);
    console.log(round)

    expect(round.deck).to.be.an('array')
    expect(round.currentCard.id).to.equal(1)
    expect(round.turns).to.equal(0)
    expect(round.incorrectGuesses).to.deep.equal([])
  });

});