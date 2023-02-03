const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
    
  let deckOfcards;

    beforeEach(() => {
        const card1 = new Card(
            1,
            "What allows you to define a set of related information using key-value pairs?",
            ["object", "array", "function"],
            "object"
          );
        const card2 = new Card(
            2,
            "What is a comma-separated list of related values?",
            ["array", "object", "function"],
            "array"
          );
        const card3 = new Card(
            3,
            "What type of prototype method directly modifies the existing array?",
            ["mutator method", "accessor method", "iteration method"],
            "mutator method"
          );
          deckOfcards = new Deck([card1, card2, card3])
    });

    it('should be a function', function() {
        const card1 = new Card(
            1,
            "What allows you to define a set of related information using key-value pairs?",
            ["object", "array", "function"],
            "object"
    );
        deckOfcards = new Deck([card1])
        expect(Deck).to.be.a('function')
    });
    it('should be able to store cards ', function () {
        const card1 = new Card(
            1,
            "What allows you to define a set of related information using key-value pairs?",
            ["object", "array", "function"],
            "object");

          const card2 = new Card(
            2,
            "What is a comma-separated list of related values?",
            ["array", "object", "function"],
            "array");

            const card3 = new Card(
              3,
              "What type of prototype method directly modifies the existing array?",
              ["mutator method", "accessor method", "iteration method"],
              "mutator method");

              expect(deckOfcards.cardCount).to.deep.equal([]);
              deckOfcards.storeCard(card1)
              deckOfcards.storeCard(card2)
              deckOfcards.storeCard(card3)
              expect(deckOfcards.cardCount).to.deep.equal([card1, card2, card3]);
      });
    });