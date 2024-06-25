let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let msg = document.querySelector("#msg");

let user = 0;
let computer = 0;


// computer-choice :-
const gencompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];

}

// Draw Game:-
const drawGame = () => {
    console.log("The game was draw");
    msg.innerText = "Game was Draw. Try again";
    msg.style.backgroundColor = "black";
}


const showWinner = (userWin) => {
    if (userWin === true) {
        user++;
        userScore.innerText = user;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";

    } else {
        computer++;
        compScore.innerText = computer;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

//user-choice :-
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = gencompChoice();
    console.log( "comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}





choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});

