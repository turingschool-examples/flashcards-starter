const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/deck');
//const Turn = require('../src/turns');

describe('Deck', function(){
    let card;
    let card1;
    let card2;
    let deck;

    this.beforeEach(() => {
        card = new Card(1, 'What animal is cuter, a puppy or a kitten?', ['puppy', 'kitten'], 'puppy');
        card1 = new Card(11, 'What is Jimmy\'s favorite toy', ['bunny', 'ball', 'sea turtle'], 'bunny');
        card2 = new Card(14, 'What color are Beth\'s eyes?', ['blue', 'green', 'hazel'], 'hazel');
        deck = new Deck([card, card1, card2]);
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should be able to store an array of cards', function() {
        expect(deck.cards).to.deep.equal([card, card1, card2]);
    })

    it('should be able to count how many cards are in each deck', function() {
        expect(deck.countCards()).to.equal(3);                    
    })
})