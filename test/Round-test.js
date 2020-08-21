const chai = require('chai')
const expect = chai.expect
const Round = require ('../src/Round.js')
const Card = require('../src/Card.js');
const Turn  = require('../src/Turn.js');
const Deck = require ('../src/Deck.js');

describe('Round',function(){
    it('should be a function',function(){
        expect(Round).to.be.a('function')
    })
    
    it('should be able to return current card',function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round.returnCurrentCard()).to.deep.equal(card1)

    })
    it('it should update turn count',function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);
        round.takeTurn('sea otter')
        expect(round.turns).to.equal(1)

    })
    it('it should give correct feedback after turn ',function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);
        expect(round.takeTurn('sea otter')).to.equal('correct!')
    })
    it('it should give correct negative feedback if incorrect',function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);
        expect(round.takeTurn('pug')).to.equal('incorrect!')
    })
    it('it should be able to return incorrect guesses',function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);
        round.takeTurn('pug')
        round.takeTurn('spleen')
        round.takeTurn('playing with bubble wrap')
        expect(round.incorrectGuesses).to.deep.equal([1,14])
    })
    it('it should be able to calculate percent correct',function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);
        round.takeTurn('pug')
        round.takeTurn('spleen')
        round.takeTurn('playing with bubble wrap')
        expect(round.calculatePercentCorrect()).to.equal(66)
    })
    it('should correct string when round is over',function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);
        round.takeTurn('pug')
        round.takeTurn('spleen')
        round.takeTurn('playing with bubble wrap')
        expect(round.endRound()).to.equal(`** You need to Review! ** You only answered 66% of the questions correctly!`)
    })

})

