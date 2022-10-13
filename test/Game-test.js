const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const expect = chai.expect;

describe('Game', () => {
    let card1, card2, card3, deck, round;
    beforeEach(() => {
    card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
    card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
    card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game();
    });

    it('should track the number of rounds', () => {
        expect(game.currentRound).to.equal(0);
        game.createRound()
        expect(game.currentRound).to.equal(1);
    });

    it('should successfully create a deck of cards on a new round', () => {
        game.createRound();
        expect(game.round.deck.cards[5].id).to.equal(6)
    });

});