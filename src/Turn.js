class Turn{
  constructor(string, card){
  }
  returnGuess(){
    var newCard = new Card();
    return newCard.question;
  }
  returnCard(){
    var newCard = new Card();
    return newCard;
  }
  evaluateGuess(){
var newCard = new Card();
if(newCard.possibleAnswers[i] === newCard.correctAnswer){
  return true;
}
  return false;
  }
  giveFeedback(){
  var newCard = new Card();
  if(newCard.correctAnswer === false){
    return 'Incorrect!';
  }
  return 'Correct!';

  }
}
