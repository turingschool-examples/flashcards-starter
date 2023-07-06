const chai = require('chai');
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect
} = require('../src/card');

describe('card', function () {
  it('should be a function', function () {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const robbieCard = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?'
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');

    expect(robbieCard.id).to.equal(1);
    expect(robbieCard.question).to.equal("What is Robbie's favorite animal");
    expect(robbieCard.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
    expect(robbieCard.correctAnswer).to.equal('sea otter');
  });

  it('should create another card and its properties', function () {
    const cardTwo = createCard(
      2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array'
    );

    expect(cardTwo.id).to.equal(2);
    expect(cardTwo.question).to.equal(
      'What is a comma-separated list of related values?'
    );
    expect(cardTwo.answers).to.deep.equal(['array', 'object', 'function']);
    expect(cardTwo.correctAnswer).to.equal('array');
  });
});

describe('turn', function () {
  it('should return correct! when the guess is correct', function () {
    const randomCard = createCard(
      3,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const guess = 'sea otter';
    const correctAnswer = randomCard.correctAnswer;
    const turn = evaluateGuess(guess, correctAnswer);

    expect(turn).to.equal('correct!');
  });

  it('should return incorrect! when the guess is incorrect', function () {
    const guess = 'pug';
    const correctAnswer = 'sea otter';
    const turn = evaluateGuess(guess, correctAnswer);

    expect(turn).to.equal('incorrect!');
  });
});

describe('deck', function () {
  it('should create an array of card objects', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );

    const deck = createDeck([card1, card2, card3]);

    expect(deck[0].id).to.equal(1);
  });

  it('should know how many cards are in the deck', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );

    const deck = createDeck([card1, card2, card3]);
    const cardsLength = countCards(deck);

    expect(cardsLength).to.equal(3);
  });
});

describe('round', function () {
  it('should be an object that organizes guesses and records if they are correct or incorrect', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, card1, 0, []);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    });
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([])

    expect(takeTurn('sea otter', round)).to.equal('correct!');
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([])
    expect(round.currentCard).to.equal(card2);
    

    expect(takeTurn('spleen', round)).to.equal('incorrect!');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([14])
    expect(round.currentCard).to.equal(card3);
    
    expect(calculatePercentCorrect(round)).to.equal(50)
  });

});
