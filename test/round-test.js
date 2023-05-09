const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound, takeTurn } = require('../src/round');

describe('round', function() {
    it('should return a round', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
        const card3 = createCard(3, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck)

        expect(round.deck).to.equal(deck)
        expect(round.currentCard).to.equal(card1)
        expect(round.turns).to.equal(0)
        expect(round.incorrectGuesses).to.deep.equal([])
    })
})

describe('take turn', function() {
    it('should allow user to take a turn', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
        const card3 = createCard(3, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck)
        const guess = takeTurn('object', round, deck)

        expect(guess).to.equal('correct!')
        expect(round.currentCard).to.equal(card2)
        expect(round.turns).to.equal(1)
    })

    it('should update incorrect guesses if the guess is wrong', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
        const card3 = createCard(3, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck)
        const guess = takeTurn('array', round, deck)

        expect(guess).to.equal('incorrect!')
        expect(round.currentCard).to.equal(card2)
        expect(round.turns).to.equal(1)
        expect(round.incorrectGuesses).to.deep.equal([1])
    })

    it('should update when many turns are taken', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
        const card3 = createCard(3, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck)
        const guess1 = takeTurn('array', round, deck)

        expect(guess1).to.equal('incorrect!')
        expect(round.currentCard).to.equal(card2)
        expect(round.turns).to.equal(1)
        expect(round.incorrectGuesses).to.deep.equal([1])

        const guess2 = takeTurn('array', round, deck)

        expect(guess2).to.equal('correct!')
        expect(round.currentCard).to.equal(card3)
        expect(round.turns).to.equal(2)
        expect(round.incorrectGuesses).to.deep.equal([1])
    })
})