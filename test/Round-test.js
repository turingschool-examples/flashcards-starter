const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function() {
    it('should be an instance of a round', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');
        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');


        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round).to.be.an.instanceof(Round);
    });
    it('should have a deck of cards', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');
        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');


        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round.deck).to.deep.equal(deck)
    });
    it('return the current card in play (first in the deck)', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');
        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');


        const deck = [card1, card2, card3];

        const round = new Round(deck);

        expect(round.returnCurrentCard()).to.equal(card1);

    });
    it('increase the turn count each turn', function() {
        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');
        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');


        const deck = [card1, card2, card3];

        const round = new Round(deck);

        round.takeTurn();

        expect(round.turnCount).to.equal(1);

        round.takeTurn();

        expect(round.turnCount).to.equal(2);
    });
})