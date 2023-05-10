const chai = require('chai');
const expect = chai.expect;
const { subdata } = require("../src/subdata.js");

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentage, endRound} = require('../src/card');


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
});

describe('turn', function(){
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('evaluates if answer is correct', () => {
    const newCard = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const answer = evaluateGuess('sea otter', newCard.correctAnswer);
    
    expect(answer).to.equal('correct!');
  });

  it('evaluates if guess is incorrect', () => {
    const newCard = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const answer = evaluateGuess('capybara', newCard);
    
    expect(answer).to.equal('incorrect!');
  });

});
describe('createDeck function', function(){
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should return an array of card objects', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3]);
    expect(deck[0]).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
    expect(deck[1]).to.deep.equal({
      id: 14,
      question: 'What organ is Khalid missing?',
      answers: [ 'spleen', 'appendix', 'gallbladder' ],
      correctAnswer: 'gallbladder'
    });
    expect(deck[2]).to.deep.equal({
      id: 12,
      question: "What is Travis's middle name?",
      answers: [ 'Lex', 'William', 'Fitzgerald' ],
      correctAnswer: 'Fitzgerald'
    });
  });

}); 

describe('countCards function', function(){
  it('should be a function', function() {
    expect(countCards).to.be.a('function');
  });

  it('should count how many cards in deck', function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  
    const deck = createDeck([card1, card2, card3]);
    const count = countCards(deck)
    expect(count).to.equal(3)
  });
});

describe('createRound function', function(){
  it('should be a function', () => {
    expect(createRound).to.be.a('function')
  })

  it('should create a new round object', () => {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(subdata)
    expect(round.deck).to.deep.equal(subdata);
    expect(round.currentCard).to.deep.equal({
      "id": 1,
      "question": "What is Robbie\'s favorite animal",
      "answers": ['sea otter', 'pug', 'capybara'],
      "correctAnswer": "sea otter"
    })
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

});

describe('create takeTurn function', function() {
  it('should be a function', () => {
    expect(takeTurn).to.be.a('function')
  });

  it('each round should say correct or incorrect', () => {

      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
      const deck = createDeck([card1, card2, card3]);
      const round = createRound(subdata);
    
      const correct = takeTurn('sea otter', round);
      // expect(takeTurn).to.equal('correct!')

     const incorrect = takeTurn('spleen', round);
      expect(incorrect).to.equal('incorrect!');
      // takeTurn('spleen', round)

      expect(round.turns).to.equal(2);
      expect(round.currentCard).to.deep.equal({
        id: 12,
        question: "What is Travis's middle name?",
        answers: [ "Lex', 'William', 'Fitzgerald" ],
        correctAnswer: 'Fitzgerald'
      })
      expect(round.incorrectGuesses).to.deep.equal([14])
  });
});

describe('calculatePercentage function', function(){
  it('should be a function', () => {
    expect(calculatePercentage).to.be.a('function')
  })

  it('should calculate the percentage of correct answers',() => {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = createDeck([card1, card2, card3]);

    const round = createRound(deck);
    takeTurn('sea otter', round);
    takeTurn('spleen', round)
    const percentRight = calculatePercentage(round)

    expect(percentRight).to.equal(50)
  })

})

describe('endRound function', function(){
  it('should be a function', () => {
    expect(endRound).to.be.a('function')
  })

  it('should display when round is over and percent correct', () => {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = createDeck([card1, card2, card3]);

    const round = createRound(deck);
    takeTurn('sea otter', round);

    const percentage = calculatePercentage(round);
    endRound(round);
    takeTurn('spleen', round)
    calculatePercentage(round)
    const displayEnd = endRound(round)

    expect(displayEnd).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  });
})