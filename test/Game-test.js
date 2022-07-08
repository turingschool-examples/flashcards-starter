const chai = require('chai');
const expect = chai.expect;

const cardData = require('../src/data');
const prototypeQuestions = cardData.prototypeData;
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game();

    });

    it.skip('should be a function', () => {
        expect(Game).to.be.a('function');

    });

    it.skip('should start a game', () => {
        expect(game.start).to.be.a('function');

    });

    it.skip('should keep track of current round', () => {
        game.newRound(prototypeQuestions);
        expect(game.currentRound).to.be.a.instanceOf(Round);

    });


    it.skip('should create cards', () => {
        game.start(prototypeQuestions);
        expect(game.deck.cards).to.deep.equal(prototypeQuestions);

    });

    it.skip('should create new round using deck', () => {
        game.start(prototypeQuestions);
        expect(game.currentRound.currentCard).to.equal(prototypeQuestions[0]);

    });

    it('should display guess feedback', () => {
        game.start(prototypeQuestions);
        const feedback = game.printFeedback(game.currentRound.currentCard.answers[0], game.deck.cards[1]);
        expect(feedback).to.equal('correct!');

    });

    it.skip('should print next question', () => {
        const nextQuestion = game.printQuestion();
        expect(nextQuestion).toEqual(prototypeQuestions[0].question);

    });

});

