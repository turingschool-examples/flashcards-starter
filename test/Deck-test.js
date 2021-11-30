const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', () => {
  const card1 = new Card(1, 'What is my favorite web language?', ['JavaScript', 'Python', 'TypeScript'], 'JavaScript');
  const card2 = new Card(2, 'Who is Teddy\'s best friend?', ['Pepper', 'Kiba', 'Dingo'], 'Dingo');
  const card3 = new Card(3, 'What is my favorite TV show?', ['House', 'Breaking Bad', 'Grey\'s Anatomy'], 'Breaking Bad');
  const deck = new Deck([card1, card2, card3]);

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should be an intance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should return how many cards are in a deck', () => {
        const cardCount = deck.countCards();
        expect(cardCount).to.equal(3);
    })
})