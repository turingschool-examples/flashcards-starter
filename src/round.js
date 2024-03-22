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
        round.currentCard = round.deck[round.currentCard.id]
        return 'correct'
    } else {
        round.incorrectGuess.push(round.currentCard.id)
        round.turns+=1
        round.currentCard = round.deck[round.currentCard.id]
        return 'incorrect'
    }

}
 const calculatePercentCorrect = (round) =>{
    let numberOfWins = (round.deck.length - round.incorrectGuess.length)
    let winRatio = numberOfWins / round.deck.length
    let winPercent = winRatio * 100

    return winPercent.toFixed(1)
 }
const endRound = (round) =>{
    let endGame = round.deck.length    
    if (round.turns === endGame){
        return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!` 
    }
}




module.exports ={
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}