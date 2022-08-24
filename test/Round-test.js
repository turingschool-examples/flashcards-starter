const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turns');
const Round = require('../src/Round');

describe('Round', function() {
    let card;
    let card1;
    let card2;
    let deck;
    let round;
    let turn;

    this.beforeEach(() => {
       // console.log('My deck code is running!')
        card = new Card(1, 'What animal is cuter, a puppy or a kitten?', ['puppy', 'kitten'], 'puppy');
        card1 = new Card(2, 'What is Jimmy\'s favorite toy', ['bunny', 'ball', 'sea turtle'], 'bunny');
        card2 = new Card(3, 'What color are Beth\'s eyes?', ['blue', 'green', 'hazel'], 'hazel');
        deck = new Deck([card, card1, card2]);
        turn = new Turn('puppy', card)
        round = new Round(deck);

    })

    it('should be able to store a deck', function() {
        expect(round.deck).to.equal(deck);
        
    })

    it('should return current card being played', function() {
        expect(round.returnCurrentCard()).to.equal(deck.cards[0])
        //expect(round.returnCurrentCard()).to.equal(deck.cards[1])
       // console.log("deck 0", deck.cards[1])
    })

    it('should be able to take turns', function() {
        round.takeTurn()
        expect(round.turns).to.equal(1)
    })

})