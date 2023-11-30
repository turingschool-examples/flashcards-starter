const chai = require('chai')
const expect = chai.expect
const { createRound, takeTurn, calculatePercentageCorrect, endRound } = require('../src/round')
const { createCard } = require('../src/card.js')

describe("The round object will organize guesses and records if they are correct or incorrect", () => {
    it('should have a deck property that holds onto the deck object', () => {
        //Set Up
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round1 = createRound(deck)
        const deckProperty = round1.deck

        expect(deckProperty).to.equal(deck)
    })

    it('currentCard property should start as the first card in the deck', () => {
        //Set Up
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round1 = createRound(deck)
        const currentCardProperty = round1.currentCard

        expect(currentCardProperty).to.equal(deck[0])
    })

    it('turns property should start at 0', () => {
        //Set Up
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round1 = createRound(deck)
        const turnsProperty = round1.turns

        expect(turnsProperty).to.equal(0)
    })

    it('incorrectGuesses property should start as an empty array', () => {
        //Set Up
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round1 = createRound(deck)
        const incorrectGuessesProperty = round1.incorrectGuesses

        expect(incorrectGuessesProperty).to.deep.equal([])
    })

})

describe("takeTurn function", () => {
    it("when a guess is made, the turns count is updated", () => {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = [card1, card2, card3];
        const round = createRound(deck)
        const guess = 'guess'

        takeTurn(guess, round)
        takeTurn(guess, round)

        expect(round.turns).to.equal(2)


    })

    it("when a guess is made, the next card becomes the current card", () => {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round = createRound(deck)
        const guess = 'guess'

        takeTurn(guess, round)
        takeTurn(guess, round)

        expect(round.currentCard).to.equal(card3)
    })

    it("when a guess is made, incorrect guesses will be stored in incorrectGuesses", () => {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round = createRound(deck)
        const wrongGuess = 'guess'
        const correctGuess = "fitzgerald"

        takeTurn(wrongGuess, round)
        takeTurn(wrongGuess, round)
        takeTurn(correctGuess, round)
        
        expect(round.incorrectGuesses).to.deep.equal([1, 14])
    })

})
describe("calculatePercentageCorrect function", () => {
    it("should calculate and return the percentage of correct guesses", () => {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round = createRound(deck)
        const wrongGuess = 'guess'
        const correctGuess = "fitzgerald"

        takeTurn(wrongGuess, round)
        takeTurn(wrongGuess, round)
        takeTurn(correctGuess, round)

        const result = calculatePercentageCorrect(round)

        expect(result).to.equal(.33)
    })
})

describe("endRound function", () => {
    it('should return a statement with % of correct answers', () => {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'fitzgerald');

        const deck = [card1, card2, card3];
        const round = createRound(deck)
        const wrongGuess = 'guess'
        const correctGuess = "fitzgerald"

        takeTurn(wrongGuess, round)
        takeTurn(wrongGuess, round)
        takeTurn(correctGuess, round)

        const percentCorrect = calculatePercentageCorrect(round)
        const result = endRound(percentCorrect)

        expect(result).to.equal("** Round over! ** You answered 33% of the questions correctly!")
    })
})