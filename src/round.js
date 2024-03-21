const { evaluateGuess } = require("./card")

const createRound = (deck) => {
    let round = {
        deck,
    }
    round.currentCard = round.deck[0]
    round.turns = 0
    round.incorrectGuess = []
    return round
}
const takeTurn = (guess, round) =>{
     if(guess === round.currentCard.correctAnswer){
        round.turns+=1
        round.currentCard = round.deck[1]
        return 'correct'
    } else {
        round.incorrectGuess.push(round.currentCard.id)
        round.turns+=1
        round.currentCard = round.deck[1]
        return 'incorrect'
    }

}








module.exports ={
    createRound,
    takeTurn,
    //calculatePercentCorrect,
    //endRound
}