const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/deck');
const { createCard, evaluateGuess } = require('../src/card');

let card1, card2, card3, deck, round;

describe('deck', function() {

    beforeEach(function() {
        card1 = createCard(1, 'What is my favorite food', ['pizza', 'burritos', 'hamburgers'], 'burritos');
        card2 = createCard(2, 'What is my favorite color', ['blue', 'orange', 'purple'], 'orange');
        card3 = createCard(3, 'Where did I grow up', ['Michigan', 'Canada', 'Florida'], 'Michigan');
        deck = createDeck(card1, card2, card3);
    });

    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it('should create a deck with multiple cards', function() {
        expect(deck).to.deep.equal([
            { id: 1, question: 'What is my favorite food', answers: ['pizza', 'burritos', 'hamburgers'], correctAnswer: 'burritos' },
            { id: 2, question: 'What is my favorite color', answers: ['blue', 'orange', 'purple'], correctAnswer: 'orange' },
            { id: 3, question: 'Where did I grow up', answers: ['Michigan', 'Canada', 'Florida'], correctAnswer: 'Michigan' }
        ]);
    });
});

describe('count', function() {

    beforeEach(function() {
        card1 = createCard(1, 'What is my favorite food', ['pizza', 'burritos', 'hamburgers'], 'burritos');
        card2 = createCard(2, 'What is my favorite color', ['blue', 'orange', 'purple'], 'orange');
        card3 = createCard(3, 'Where did I grow up', ['Michigan', 'Canada', 'Florida'], 'Michigan');
        deck = createDeck(card1, card2, card3);
    });

    it('should be a function', function() {
        expect(countCards).to.be.a('function');
    });

    it('should count the cards in a given deck', function() {
        const count = countCards(deck);
        expect(count).to.equal(3);
    });
});

describe('round', function() {

    beforeEach(function() {
        card1 = createCard(1, 'What is my favorite food', ['pizza', 'burritos', 'hamburgers'], 'burritos');
        card2 = createCard(2, 'What is my favorite color', ['blue', 'orange', 'purple'], 'orange');
        card3 = createCard(3, 'Where did I grow up', ['Michigan', 'Canada', 'Florida'], 'Michigan');
        deck = createDeck(card1, card2, card3);
    });

    it('should be a function', function() {
        expect(createRound).to.be.a('function');
    });

    it('should be an object that stores info about the game', function() {
        const round = createRound(deck);
        expect(round.deck).to.equal(deck);
        expect(round.currentCard).to.deep.equal({ id: 1, question: 'What is my favorite food', answers: ['pizza', 'burritos', 'hamburgers'], correctAnswer: 'burritos' });
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
});

describe('take turn', function() {

    beforeEach(function() {
        card1 = createCard(1, 'What is my favorite food', ['pizza', 'burritos', 'hamburgers'], 'burritos');
        card2 = createCard(2, 'What is my favorite color', ['blue', 'orange', 'purple'], 'orange');
        card3 = createCard(3, 'Where did I grow up', ['Michigan', 'Canada', 'Florida'], 'Michigan');
        deck = createDeck(card1, card2, card3);
        round = createRound(deck);
    });

    it('should be a function', function() {
        expect(takeTurn).to.be.a('function');
    });
    // takeTurn(guess, round): updates the turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
    // When a guess is made:
    // The turns count is updated, regardless of whether the guess is correct or incorrect
    // The next card becomes current card
    // Guess is evaluated. Incorrect guesses will be stored (via card’s the id) in an array of incorrectGuesses
    // Feedback is returned regarding whether the guess is incorrect or correct
    
    it('should update the turn count when a guess is made', function() {
        const turn = takeTurn('pizza', round);
        expect(round.turns).to.equal(1);
    })

    it('should return correct for correct answers', function() {
        const turn = takeTurn('burritos', round);
        expect(turn).to.equal('That is correct');
        // expect(round.turns).to.equal(1);
        // expect(round.currentCard).to.deep.equal({id: 2, question: 'What is my favorite color', answers: ['blue', 'orange', 'purple'], correctAnswer: 'orange'});
        // expect(round.incorrectGuesses).to.equal([]);
    })

    it('should return incorrect for incorrect answers', function() {
        const turn = takeTurn('pizza', round);
        expect(turn).to.equal('That is incorrect')
    })

    it('should update the incorrect guesses if an answer is incorrect', function() {
        const turn = takeTurn('pizza', round);
        expect(round.incorrectGuesses).to.deep.equal([1]);
    })

    it('should update the current card to the next card in the deck', function() {
        const turn = takeTurn('burritos', round);
        expect(round.currentCard).to.deep.equal({id: 2, question: 'What is my favorite color', answers: ['blue', 'orange', 'purple'], correctAnswer: 'orange'})
    })

    it('should update the incorrect guesses on another turn', function() {
        const turn = takeTurn('pizza', round);
        const takeNextTurn = takeTurn('purple', round);
        expect(round.incorrectGuesses).to.deep.equal([1, 2]);
    })
})

describe('calculate percent function', function() {

    beforeEach(function() {
        card1 = createCard(1, 'What is my favorite food', ['pizza', 'burritos', 'hamburgers'], 'burritos');
        card2 = createCard(2, 'What is my favorite color', ['blue', 'orange', 'purple'], 'orange');
        card3 = createCard(3, 'Where did I grow up', ['Michigan', 'Canada', 'Florida'], 'Michigan');
        deck = createDeck(card1, card2, card3);
        round = createRound(deck);
    })

    it('should be a function', function() {
        expect(calculatePercentCorrect).to.be.a('function');
    })

    it('shold calculate the percentage of correct vs. incorrect answers', function() {
        const firstTurn = takeTurn('pizza', round);
        const secondTurn = takeTurn('purple', round);
        const thirdTurn = takeTurn('Michigan', round);
        const correctPercentage = calculatePercentCorrect(round);
        expect(correctPercentage).to.equal(33)
    })
   
    it('should calculate the percentage of another round', function() {
        const firstTurn = takeTurn('burritos', round);
        const secondTurn = takeTurn('purple', round);
        const thirdTurn = takeTurn('Michigan', round);
        const correctPercentage = calculatePercentCorrect(round);
        expect(correctPercentage).to.equal(66)
    })
})

describe('end round', function() {

    beforeEach(function() {
        card1 = createCard(1, 'What is my favorite food', ['pizza', 'burritos', 'hamburgers'], 'burritos');
        card2 = createCard(2, 'What is my favorite color', ['blue', 'orange', 'purple'], 'orange');
        card3 = createCard(3, 'Where did I grow up', ['Michigan', 'Canada', 'Florida'], 'Michigan');
        deck = createDeck(card1, card2, card3);
        round = createRound(deck);
    })

    it('should be a function', function() {
        expect(endRound).to.be.a('function')
    })

    it('should declare Round Over! and show the percentage of questions answered correctly when a round is over', function() {
        const firstTurn = takeTurn('burritos', round);
        const secondTurn = takeTurn('purple', round);
        const thirdTurn = takeTurn('Michigan', round);
        const correctPercentage = calculatePercentCorrect(round);
        const roundOver = endRound(round);
        expect(roundOver).to.equal('Round Over! You answered 66% of the questions correctly')
    })

})