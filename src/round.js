function takeTurn() {

}

const evaluateGuess = (guess, correctAnswer) => {
    if (guess !== correctAnswer){
        return 'incorrect!'
    } else {return 'correct!'}
}
function endRound() {

}



module.exports = {
    takeTurn,
    evaluateGuess,
    endRound}