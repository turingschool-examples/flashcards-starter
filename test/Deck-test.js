const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck')

let card1, card2, card3, deck;

describe("Deck", () => {

  beforeEach(() => {
    (card1 = new Card({
      id: 1,
      question:
        "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    })),
      (card2 = new Card({
        id: 2,
        question: "What is a comma-separated list of related values?",
        answers: ["array", "object", "function"],
        correctAnswer: "array"
      })),
      (card3 = new Card({
        id: 3,
        question:
          "What type of prototype method directly modifies the existing array?",
        answers: ["mutator method", "accessor method", "iteration method"],
        correctAnswer: "mutator method"
      }));
      deck = new Deck([card1, card2, card3])
  });

  it('should know how many card objects are in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });

});

