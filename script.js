let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const getAbsoluteDistance = (guess,target) =>{
  return Math.abs(guess - target)
}
   

const generateTarget = () => 
   Math.floor(Math.random() *10);

//console.log(generateTarget())

const compareGuesses = (humanGuessInput,computerGuess, target) =>{
  const userDiff = getAbsoluteDistance(humanGuessInput,target);
  const computerDiff = getAbsoluteDistance(computerGuess, target);
  if (userDiff <= computerDiff){
    return true;
  }
  else {
    return false;
  }
}

console.log(compareGuesses(4,4,4))

const  updateScore = (winner) =>{
  let humanScore = 0;
  let computerScore = 0;
  if (winner ==='human'){
    humanScore +=1;
  }else {
    computerScore +=1;
  }
}

const advanceRound = (currentRoundNumber) =>{
  return currentRoundNumber += 1;
}
//console.log(advanceRound(currentRoundNumber))


