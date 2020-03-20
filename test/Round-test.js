const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    const card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should accept a deck of cards', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    const card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });

    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card being played', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    const card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });

    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    var currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);
    round.takeTurn('object', currentCard);
    var currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card2);

  })

  it('should be able to accept a guess', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    const card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });

    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    var currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);

    round.takeTurn('object', currentCard);
    expect(round.turns).to.equal(1);
  })

  it('should return "correct!" if the guess is correct', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    const card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    var currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);

    var isCorrect = round.takeTurn("object", currentCard);
    expect(isCorrect, "correct!");
  })

  it('should return "incorrect!" if the guess is correct', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    const card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    var currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);

    var isCorrect = round.takeTurn("banana", currentCard);
    expect(isCorrect, "incorrect!");
  })

  it('should count turns', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
      });
      const card2 = new Card({
        "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"
      });
      const card3 = new Card({
        "id": 3,
        "question": "What type of prototype method directly modifies the existing array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "mutator method"
      });

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    var currentCard = round.returnCurrentCard();

    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('array', currentCard);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([1]);

    var currentCard = round.returnCurrentCard();

    round.takeTurn('function', currentCard);
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([1, 2])
    });

    it('should calculate correct percentage', function() {
      const card1 = new Card({
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
        });
        const card2 = new Card({
          "id": 2,
          "question": "What is a comma-separated list of related values?",
          "answers": ["array", "object", "function"],
          "correctAnswer": "array"
        });
        const card3 = new Card({
          "id": 3,
          "question": "What type of prototype method directly modifies the existing array?",
          "answers": ["mutator method", "accessor method", "iteration method"],
          "correctAnswer": "mutator method"
        });

      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      var currentCard = round.returnCurrentCard();

      expect(round.turns).to.equal(0);
      expect(round.incorrectGuesses).to.deep.equal([])

      round.takeTurn('array', currentCard);
      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses).to.deep.equal([1])

      var currentCard = round.returnCurrentCard();

      round.takeTurn('function', currentCard);
      expect(round.turns).to.equal(2);

      var currentCard = round.returnCurrentCard();

      round.takeTurn('mutator method', currentCard);
      expect(round.turns).to.equal(3);
      expect(round.incorrectGuesses.length).to.equal(2);

      var percentCorrect = round.calculatePercentCorrect();
      expect(percentCorrect, 66);
      });
});
