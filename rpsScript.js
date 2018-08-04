const results = document.querySelector('#results');
let roundNum = 0;
let winNum = 0, tieNum = 0, loseNum = 0;

let playerSelection = '';
let roundResult = '';

var btn1 = document.querySelector('#rockButton');
btn1.addEventListener('click', () => {
    roundResult = singleRound("Rock",computerPlay());
    roundNum ++;
    recordResult(roundResult);
    displayRoundResult(roundResult);
    displayFinalResult(winNum, tieNum, loseNum);
});

var btn2 = document.querySelector('#paperButton');
btn2.addEventListener('click', () => {
    roundResult = singleRound("Paper",computerPlay());
    roundNum ++;
    recordResult(roundResult);
    displayRoundResult(roundResult);
    displayFinalResult(winNum, tieNum, loseNum);
});

var btn3 = document.querySelector('#scissorsButton');
btn3.addEventListener('click', () => {
    roundResult = singleRound("Scissors",computerPlay());
    roundNum ++;
    recordResult(roundResult);
    displayRoundResult(roundResult);
    displayFinalResult(winNum, tieNum, loseNum);
});

function computerPlay() {
    var playChoices = ["Rock","Paper","Scissors"];
    var randomChoice = playChoices[Math.floor(Math.random() * playChoices.length)];
    return randomChoice;
}

function singleRound(playerChoice,computerChoice) {
    let result;

    let playerChoiceUpper = playerChoice.toUpperCase();
    let computerChoiceUpper = computerChoice.toUpperCase();

    switch(playerChoiceUpper) {

        case "ROCK":
            if(computerChoiceUpper === "ROCK") {
                result = "Tie";
            } else if(computerChoiceUpper === "PAPER") {
                result = "Lose";
            } else {
                result = "Win";
            }
            break;
        
        case "PAPER":
            if(computerChoiceUpper === "ROCK") {
                result = "Win";
            } else if(computerChoiceUpper === "PAPER") {
                result = "Tie";
            } else {
                result = "Lose";
            }
            break;
            
        case "SCISSORS":
            if(computerChoiceUpper === "ROCK") {
                result = "Lose";
            } else if(computerChoiceUpper === "PAPER") {
                result = "Win";
            } else {
                result = "Tie";
            }
            break;

        default:
            result = "Oops! Something went wrong..."
    }

    return result;
}

function recordResult(roundResult) {

    if(roundResult === "Win") {
        winNum++;
    } else if(roundResult === "Tie") {
        tieNum++;
    } else if(roundResult === "Lose"){
        loseNum++;
    } else {

    }

}

function displayRoundResult(roundResult) {
    const paraResult = document.createElement('p');
    paraResult.textContent = "Round "+roundNum+" result: "+roundResult;
    results.appendChild(paraResult);
}

function displayFinalResult(winNum,tieNum,loseNum) {

    if(roundNum>=5) {
        const paraFinalResult = document.createElement('p');
        paraFinalResult.textContent = "Final tally! After 5 rounds, you scored "+winNum+" wins, "+tieNum+" ties, and "+loseNum+" losses";
        paraFinalResult.style.fontWeight = "bold";
        results.appendChild(paraFinalResult);
    }
}