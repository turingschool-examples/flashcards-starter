const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function () {
    it('should be a function', function(){
        const round = new Round();
        expect(Round).to.be.a('function');
    })
    it('should be an instance of Round',function(){
        const round = new Round();
        expect(round).to.be.an.instanceOf(Round);
    })
    it('returnCurrentCard should return the current played card', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1,card2,card3]);
        const round = new Round(deck);

        expect(round.returnCurrentCard()).to.equal(card1)
    })
    // it('should make a new turn instance when a guess is made', function () {
    //     const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    //     const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    //     const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    //     const deck = new Deck([card1, card2, card3]);
    //     const round = new Round(deck);
    //     expect(round).to.be.an.instanceOf(Round);

    // })
    it('should update turns count regardless of whether the guess was correct or not', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.turns).to.equal(0)
        round.takeTurn('sea otter') // => 'correct!'
        expect(round.turns).to.equal(1)
    })
    it('should make the current card the next card after a new turn', function () {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.turns).to.equal(0)
        expect(round.returnCurrentCard()).to.equal(card1)
        round.takeTurn('sea otter') // => 'correct!'
        expect(round.turns).to.equal(1)
        expect(round.returnCurrentCard()).to.equal(card2)

    })
    it('should log the guess and store incorrect guess ID', function () {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn('sea otter') // => 'correct!'
        round.takeTurn('spleen') // => 'incorrect!'
        expect(round.incorrectGuesses[0]).to.equal(card2.id);

    })
    it('should return feedback regarding accuracy of guess', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.takeTurn('sea otter')).to.equal('correct!')
        var feedback = round.takeTurn('appendix') // => 'correct!'
        expect(feedback).to.equal('incorrect!')
    })

    it('calculatePercentCorrect should return the percentage of correct guesses', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn('sea otter') // => 'correct!'
        var score = round.calculatePercentCorrect();
        expect(score).to.equal(100)
        round.takeTurn('pug') // => 'incorrect!'
        var score2 = round.calculatePercentCorrect();
        expect(score2).to.equal(50)
    })
    
    it('endRound should print the proper output', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);  

        round.takeTurn('sea otter') // => 'correct!'
        round.takeTurn('pug') // => 'incorrect!'
        var output = round.endRound();
        expect(output).to.equal('** Round over! ** You answered 50% of the questions correctly!');
        
    })
})