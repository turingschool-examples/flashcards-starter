const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe("Round", function(){

    it('should be a function', function(){
        const round = new Round();
        expect(Round).to.be.a('function');
    });
    it('should be able to record all the cards', function(){
const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
const card4 = new Card(27, 'Which NBA player win the 2000s NBA Dunk Contest?', ['Lebron James', 'Michael Jordan', 'Vince Carter'], 'Vince Carter');
const card5 = new Card(17, 'Which player is left handed?', ['Michael Jordan', 'Dwight Howard', 'Chris Mullin'], 'Chris Mullin');
const deck = new Deck([card1, card2, card3, card4, card5]);
const round = new Round(deck);
expect(round.deck).to.equal(deck)
    });
    it('should display the first card', function(){
        const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
        const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
        const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
        const card4 = new Card(27, 'Which NBA player win the 2000s NBA Dunk Contest?', ['Lebron James', 'Michael Jordan', 'Vince Carter'], 'Vince Carter');
        const card5 = new Card(17, 'Which player is left handed?', ['Michael Jordan', 'Dwight Howard', 'Chris Mullin'], 'Chris Mullin');
        const deck = new Deck([card1, card2, card3, card4, card5]);
        const turn = new Turn("array", card1);
        const round = new Round(deck, turn);
        
     
        expect(round.returnCurrentCard()).to.equal(card1)
        round.takeTurn()
        expect(round.returnCurrentCard()).to.equal(card2)

    });
it('should say if the answer is incorrect', function(){
    const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
    const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
    const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
    const card4 = new Card(27, 'Which NBA player win the 2000s NBA Dunk Contest?', ['Lebron James', 'Michael Jordan', 'Vince Carter'], 'Vince Carter');
    const card5 = new Card(17, 'Which player is left handed?', ['Michael Jordan', 'Dwight Howard', 'Chris Mullin'], 'Chris Mullin');
    const deck = new Deck([card1, card2, card3, card4, card5]);
    const turn = new Turn("array", card1)
    const round = new Round(deck, turn);

    expect(round.turns).to.equal(0)
    expect(round.takeTurn()).to.equal('Incorrect')
});
it('should say if the answer is correct', function(){
    const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
    const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
    const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
    const card4 = new Card(27, 'Which NBA player win the 2000s NBA Dunk Contest?', ['Lebron James', 'Michael Jordan', 'Vince Carter'], 'Vince Carter');
    const card5 = new Card(17, 'Which player is left handed?', ['Michael Jordan', 'Dwight Howard', 'Chris Mullin'], 'Chris Mullin');
    const deck = new Deck([card1, card2, card3, card4, card5]);
    const turn = new Turn("rhino", card1)
    const round = new Round(deck, turn);

    expect(round.takeTurn()).to.equal('Correct')
});

it('should change cards', function(){
    const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
    const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
    const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
    const card4 = new Card(27, 'Which NBA player win the 2000s NBA Dunk Contest?', ['Lebron James', 'Michael Jordan', 'Vince Carter'], 'Vince Carter');
    const card5 = new Card(17, 'Which player is left handed?', ['Michael Jordan', 'Dwight Howard', 'Chris Mullin'], 'Chris Mullin');
    const deck = new Deck([card1, card2, card3, card4, card5]);
    const turn = new Turn("array", card1)
    const round = new Round(deck, turn);

    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn()
    expect(round.returnCurrentCard()).to.equal(card2)
    round.takeTurn()
    expect(round.returnCurrentCard()).to.equal(card3)
    // expect(round.calculatePercentCorrect()).to.equal(.50)
});
it('should add card id to incorrect guesses if its incorrect', function(){
    const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
    const deck = new Deck([card1]);
    const turn = new Turn("array", card1)
    const round = new Round(deck, turn);

    
    round.takeTurn()
    round.incorrectGuesses.includes(5)
});
it('should calculate correct percentage', function(){
    const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
    const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
    const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
    const card4 = new Card(27, 'Which NBA player win the 2000s NBA Dunk Contest?', ['Lebron James', 'Michael Jordan', 'Vince Carter'], 'Vince Carter');
    const card5 = new Card(17, 'Which player is left handed?', ['Michael Jordan', 'Dwight Howard', 'Chris Mullin'], 'Chris Mullin');
    const deck = new Deck([card1, card2, card3, card4, card5]);
    const turn = new Turn("rhino", card1)
    const round = new Round(deck, turn);

    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn()
    expect(round.returnCurrentCard()).to.equal(card2)
    round.takeTurn()
    expect(round.returnCurrentCard()).to.equal(card3)
    round.takeTurn()
    expect(round.calculatePercentCorrect()).to.equal(.33333333333333337)
});
});