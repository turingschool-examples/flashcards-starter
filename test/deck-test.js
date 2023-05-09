const chai = require('chai');
const expect = chai.expect;
const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');
const { sampleData } = require('../src/sample-data');

describe('creates deck', function(){
    it('should be a function', function(){
        expect(countCards).to.be.a('function')
    });
    it('should create a deck of cards', function(){
      let cards = []
      for (let i=0; i<3; i++){
        const card = createCard(sampleData[i].id, sampleData[i].question, sampleData[i].answers, sampleData[i].correctAnswer)
        cards.push(card)
      }

      const deck = createDeck(cards);

      expect(deck).to.deep.equal([sampleData[0], sampleData[1], sampleData[2]])
        
    });
    it('should create a deck with any number of cards', function(){
      let cards = []
      for (let i=0; i<5; i++){
        const card = createCard(sampleData[i].id, sampleData[i].question, sampleData[i].answers, sampleData[i].correctAnswer)
        cards.push(card)
      }

      const deck = createDeck(cards);

      expect(deck).to.deep.equal([sampleData[0], sampleData[1], sampleData[2], sampleData[3], sampleData[4]])
    });
});

describe('counts cards in deck', function(){
    it('should be a function', function(){
        expect(countCards).to.be.a('function')
    });
    it('should know how many cards are in a given deck', function(){
      let cards = []
      for (let i=0; i<4; i++){
        const card = createCard(sampleData[i].id, sampleData[i].question, sampleData[i].answers, sampleData[i].correctAnswer)
        cards.push(card)
      }

        const deck = createDeck(cards)
        const numOfCards = countCards(deck)

        expect(numOfCards).to.equal(4)
    });
    it('should know how many cards are in a given deck of a different size', function(){
      let cards = []
      for (let i=0; i<6; i++){
        const card = createCard(sampleData[i].id, sampleData[i].question, sampleData[i].answers, sampleData[i].correctAnswer)
        cards.push(card)
      }

        const deck = createDeck(cards)
        const numOfCards = countCards(deck)

        expect(numOfCards).to.equal(6)
    });
});