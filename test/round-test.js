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

        const guess1 = 'sea otter';
        const guess2 = 'spleen';

        const round2 = takeTurn(guess1, round);
        const round3 = takeTurn(guess2, round2);

        expect(round2.turns).to.equal(1);
        expect(round3.turns).to.equal(2);
    });

    it('should update current card', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const guess1 = 'sea otter';
        const guess2 = 'spleen';

        const round2 = takeTurn(guess1, round);
        const round3 = takeTurn(guess2, round2);

        expect(round2.currentCard).to.equal(card2);
        expect(round3.currentCard).to.equal(card3);
    })

    it('should update current card', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const guess1 = 'sea otter';
        const guess2 = 'spleen';

        const round2 = takeTurn(guess1, round);
        const round3 = takeTurn(guess2, round2);

        expect(round2.currentCard).to.equal(card2);
        expect(round3.currentCard).to.equal(card3);
    })

    it('should store incorrect guesses', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const guess1 = 'pug';
        const guess2 = 'spleen';

        const badResult = takeTurn(guess1, round);
        const badResultAgain = takeTurn(guess2, round);

        expect(badResult.incorrectGuesses).to.deep.equal(['pug']);
        expect(badResultAgain.incorrectGuesses).to.deep.equal(['pug', 'spleen']);
    });

    it('should give feedback on correct answer', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const guess = 'sea otter';

        const goodResult = takeTurn(guess, round);

        expect(goodResult.message).to.equal('correct!');
    });

    it('should give feedback on incorrect answer', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        const guess = 'pug';

        const badResult = takeTurn(guess, round)

        expect(badResult.message).to.equal('incorrect');
    });

});