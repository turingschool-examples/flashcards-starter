const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards} = require('../src/deck');
const { createCard, evaluateGuess } = require('../src/card');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
    it('should create a round with its properties', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const newDeck = createDeck([card1, card2, card3]);

        const round = createRound(newDeck);

        expect(round.deck).to.deep.equal(newDeck);
        expect(round.currentCard).to.deep.equal(card1);
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
});

describe('turn', function() {
    it('should update turns counter', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const rightGuess = 'sea otter';
        const wrongGuess = 'spleen';

        takeTurn(rightGuess, round);
        expect(round.turns).to.equal(1);

        takeTurn(wrongGuess, round);
        expect(round.turns).to.equal(2);
    });

    it('should update current card', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const rightGuess = 'sea otter';
        const wrongGuess2 = 'spleen';

        takeTurn(rightGuess, round);
        expect(round.currentCard).to.equal(card2);

        takeTurn(wrongGuess2, round);
        expect(round.currentCard).to.equal(card3);
    })

    it('should store incorrect guesses', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const wrongGuess1 = 'pug';
        const wrongGuess2 = 'spleen';
        const rightGuess3 = 'Fitzgerald';

        takeTurn(wrongGuess1, round);
        expect(round.incorrectGuesses).to.deep.equal([1]);

        takeTurn(wrongGuess2, round);
        expect(round.incorrectGuesses).to.deep.equal([1, 14]);

        takeTurn(rightGuess3, round)
        expect(round.incorrectGuesses).to.deep.equal([1, 14]);
    });

    it('should give feedback on correct answer', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const guess = 'sea otter';

        const goodResult = takeTurn(guess, round);

        expect(goodResult).to.equal('correct!');
    });

    it('should give feedback on incorrect answer', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const guess = 'pug';

        const badResult = takeTurn(guess, round)

        expect(badResult).to.equal('incorrect!');
    });
});

describe('percent', function() {
    it('should calculate percentage of correct guesses', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const wrongGuess1 = 'pug';
        const rightGuess2 = 'gallbladder';
        const rightGuess3 = 'Fitzgerald';

        takeTurn(wrongGuess1, round);
        expect(calculatePercentCorrect(round)).to.equal(0);

        takeTurn(rightGuess2, round);
        expect(calculatePercentCorrect(round)).to.equal(50);

        takeTurn(rightGuess3, round)
        expect(calculatePercentCorrect(round)).to.equal(67);
    });
})
