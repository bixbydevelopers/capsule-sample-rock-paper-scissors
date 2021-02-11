var console = require('console')

module.exports.function = function shootHands(userHand) {
  let bixbyHand = HANDS[Math.floor(Math.random() * HANDS.length)];

  //console.log ("1 - userHand = " + userHand + " bixbyHand = " + bixbyHand)

  let whoWon = whatHandWon(userHand, bixbyHand)

  //console.log ("whoWon = " + whoWon)

  return {
    userHand: userHand,
    bixbyHand: bixbyHand,
    whoWon: whoWon
  }
}

function whatHandWon(userHand, bixbyHand) {
  if (userHand == bixbyHand) {
    return "tie"
  } else {
    if (userHand == "Rock" && bixbyHand == "Scissors") return "you"
    else if (userHand == "Paper" && bixbyHand == "Rock") return "you"
    else if (userHand == "Scissors" && bixbyHand == "Paper") return "you"
    else return "I"
  }
}

const HANDS = ["Rock", "Paper", "Scissors"];
