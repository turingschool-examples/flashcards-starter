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
    it('should have a current card that is the first card in the deck', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');
        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');


        const deck = [card1, card2, card3];

        const round = new Round(deck);

        expect(round.currentCard).to.deep.equal(card1);
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

        expect(round.turns).to.equal(1);

        round.takeTurn();

        expect(round.turns).to.equal(2);
    });
    it('should make the next card in the deck the current card when a turn is taken', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');

        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');

        const deck = [card1, card2, card3];

        const round = new Round(deck);

        round.takeTurn('deep blue sea');

        expect(round.currentCard).to.deep.equal(card2);
    });
    it('should store incorrect gueeses in the incorrect guesses array', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');

        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');

        const deck = [card1, card2, card3];

        const round = new Round(deck);

        round.takeTurn('deep blue sea');

        expect(round.incorrectGuesses.length).to.equal(1);
        expect(round.incorrectGuesses[0]).to.equal('deep blue sea');
    });
    it('should tell you if your guess was incorrect', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');

        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');

        const deck = [card1, card2, card3];

        const round = new Round(deck);

        expect(round.takeTurn('deep blue sea')).to.deep.equal('incorrect!');
    });
    it('should store correct gueeses in the correct guesses array', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');

        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');

        const deck = [card1, card2, card3];

        const round = new Round(deck);

        round.takeTurn('science stuff');

        expect(round.correctGuesses.length).to.equal(1);
        expect(round.correctGuesses[0]).to.equal('science stuff');
    });
    it('should tell you if your guess was correct', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');

        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');

        const deck = [card1, card2, card3];

        const round = new Round(deck);

        expect(round.takeTurn('science stuff')).to.deep.equal('correct!');
    });
    it('should tell you percent of guesses that were correct', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');

        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');

        const deck = [card1, card2, card3];

        const round = new Round(deck);

        round.takeTurn('Zeus');

        round.takeTurn('object');

        expect(round.calculatePrecentCorrect()).to.equal(50);

        round.takeTurn('true');

        expect(round.calculatePrecentCorrect()).to.equal((2 / 3) * 100);
    });
    it('should be able to end a round', function() {
        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');

        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');

        const deck = [card1, card2, card3];

        const round = new Round(deck);

        expect(round.endRound()).to.include('Round over!');
    })
})