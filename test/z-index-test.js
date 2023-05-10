const chai = require('chai');
const expect = chai.expect;

const { genList, confirmUpdate } = require('../src/util')
const { animeQuiz } = require('../src/mock-data');
const { createCard } = require('../src/card');;
const { createDeck } = require("../src/deck");
const { createRound, endRound } = require("../src/round");

describe ('start', function() {
    let cards, deck, round;
    beforeEach(() => {
        cards = animeQuiz.map(card => createCard(card.id, card.question, card.answers, card.correctAnswer))
        deck = createDeck(cards)
        round = createRound(deck)
    })
    it('should start a quiz with any data given in the right format', function() {
        const firstQuestion = genList(round)
        expect(firstQuestion.message).to.equal("What anime is Calli's tattoo from?")
    })
    it('should answer the first question correctly', function() {
        const response = confirmUpdate('Given', round)
        expect(response.message).to.equal(`Your answer of Given is correct!`)
    })
    it('should end the game with 100% accuracy', function() {
        const response1 = confirmUpdate('Given', round)
        const response2 = confirmUpdate('Mappa', round)
        const response3 = confirmUpdate('Team Rocket', round)
        const response4 = confirmUpdate('Asta', round)
        const end = endRound(round)
        expect(end).to.equal('** Round over! ** You answered 100% of the questions correctly!')
    })
})
