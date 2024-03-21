const {createDeck, countCards} = require('./deck')
const {createCard, evaluateGuess} = require('./card')
function round(deck = [null]){
    return {
        deck,
        currentCard : deck[0],
        turns : 0,
        incorrectGuesses : [null]
    };
};
function takeTurn(round, guess = null){
    const roundCopy = {...round}
    const turnCard = roundCopy.currentCard;
    roundCopy.turns += 1;
    roundCopy.currentCard = roundCopy.deck[roundCopy.turns];
    const judgement = evaluateGuess(guess, turnCard.correctAnswer);
    
    console.log(judgement);
    if (judgement === 'incorrect!'){
        if (roundCopy.incorrectGuesses[0] === null){
            roundCopy.incorrectGuesses = []
        };
        roundCopy.incorrectGuesses.push(guess)
    };
    const toReturn = [roundCopy, judgement]
    return toReturn
};
function calculatePercentCorrect(round){
};
function endRound(round){
};

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound
};

const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

const deck = createDeck([card1,card2,card3]);

let newRound = round(deck);
newRound = takeTurn(newRound);