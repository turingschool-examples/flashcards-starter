const chai = require('chai');
const expect = chai.expect;

const { createDeck,
  countCards,
  createCard,
  evaluateGuess,
  createRound,
  calculatePercentCorrect,
  endRound,
  takeTurn, } = require('../src/card');

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

describe('card', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should turn the flashcards to reveal answers', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const correctResult = evaluateGuess('object', card.correctAnswer);
    const incorrectResult = evaluateGuess('array', card.correctAnswer);
    

    expect(correctResult).to.equal("Correct!");
    expect(incorrectResult).to.equal("Incorrect!");
  });  
});

describe('card', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should be a function', function() {
    expect(countCards).to.be.a('function');
  });

  it('should create a deck of cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    
    expect(deck).to.deep.equal([card1, card2, card3]);

    deckSize = countCards(deck)

    expect(deckSize).to.equal(3);
  });   
  
  describe('createRound', () => {
    it('should return an object with the specified properties', () => {
      const deck = ['card1', 'card2', 'card3'];
      const round = createRound(deck);
  
      expect(round).to.be.an('object');
      expect(round).to.have.property('deck').deep.equal(deck);
      expect(round).to.have.property('currentCard').equal(deck[0]);
      expect(round).to.have.property('turns').equal(0);
      expect(round).to.have.property('incorrectGuesses').deep.equal([]);
    });
  
    it('should handle empty deck', () => {
      const round = createRound([]);
  
      expect(round).to.be.an('object');
      expect(round).to.have.property('deck').deep.equal([]);
      expect(round).to.have.property('currentCard').to.be.undefined;
      expect(round).to.have.property('turns').equal(0);
      expect(round).to.have.property('incorrectGuesses').deep.equal([]);
    });
  
    describe('takeTurn', () => {
      it('should increment turns and update currentCard for a correct guess', () => {
        const round = {
          turns: 0,
          currentCard: { id: 1, correctAnswer: 'A' },
          deck: [{ id: 1, correctAnswer: 'A' }, { id: 2, correctAnswer: 'B' }],
          incorrectGuesses: [],
        };
    
        const feedback = takeTurn('A', round);
    
        expect(feedback).to.equal('Correct!');
        expect(round.turns).to.equal(1);
        expect(round.currentCard).to.equal(round.deck[1]);
        expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
      });
    
      it('should increment turns and update currentCard and record incorrect guess', () => {
        const round = {
          turns: 0,
          currentCard: { id: 1, correctAnswer: 'A' },
          deck: [{ id: 1, correctAnswer: 'A' }, { id: 2, correctAnswer: 'B' }],
          incorrectGuesses: [],
        };
    
        const feedback = takeTurn('B', round);
    
        expect(feedback).to.equal('Incorrect!');
        expect(round.turns).to.equal(1);
        expect(round.currentCard).to.equal(round.deck[1]);
        expect(round.incorrectGuesses).to.deep.equal([1]);
      });
    });



describe('calculatePercentCorrect', () => {
  it('should calculate percent correct for a round with correct guesses', () => {
    const round = {
      incorrectGuesses: [],
      deck: ['card1', 'card2', 'card3'],
    };

    const percentCorrect = calculatePercentCorrect(round);

    expect(percentCorrect).to.equal(100); 
  });

  it('should calculate percent correct for a round with incorrect guesses', () => {
    const round = {
      incorrectGuesses: [1, 2],
      deck: ['card1', 'card2', 'card3'],
    };

    const percentCorrect = calculatePercentCorrect(round);

    expect(percentCorrect).to.equal(33); 
  });

  it('should handle a round with zero total cards', () => {
    const round = {
      incorrectGuesses: [],
      deck: [],
    };

    const percentCorrect = calculatePercentCorrect(round);

    expect(percentCorrect).to.be.null; 
  });

  it('should handle a round with zero correct guesses', () => {
    const round = {
      incorrectGuesses: [1, 2, 3],
      deck: ['card1', 'card2', 'card3'],
    };

    const percentCorrect = calculatePercentCorrect(round);

    expect(percentCorrect).to.equal(0); 
  });


 
});
})
}) 