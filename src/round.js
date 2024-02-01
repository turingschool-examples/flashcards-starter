
function createRound(deck){
    var round = {
        deck: deck, 
        currentCard: deck[0],
        turns: 0, 
        incorrectGuesses: [],
        correctPercent: 0
    }
    return round; 
 }

function takeTurn(guess, round){
    if(guess === round.currentCard.correctAnswer){
        round.turns++;
        round.currentCard = round.deck[round.turns]
        return `correct!`
    } else {
        round.incorrectGuesses.push(round.currentCard.id);
        round.turns++;
        round.currentCard = round.deck[round.turns]
        return `incorrect!`
    }
}

function calculatePercentCorrect(round){
    var percentCorrect = (round.incorrectGuesses.length/round.turns) * 100; 
    return percentCorrect;   
}

function endRound(round){
    console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
}

 module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound }