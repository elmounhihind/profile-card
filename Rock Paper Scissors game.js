let wins = 0;
let losses = 0;
let ties = 0;

const choices = ["pierre", "papier", "ciseaux"];

function play(userChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById("computerChoice").textContent = computerChoice;
    document.getElementById("playerChoice").textContent = userChoice;

    let messageElement = document.getElementById("message");
    messageElement.className = "";

    if (userChoice === computerChoice) {
        messageElement.textContent = "Match nul 🤝";
        messageElement.classList.add("draw");
        ties++;
        playSound("drawSound");

    } else if (
        (userChoice === "pierre" && computerChoice === "ciseaux") ||
        (userChoice === "papier" && computerChoice === "pierre") ||
        (userChoice === "ciseaux" && computerChoice === "papier")
    ) {
        messageElement.textContent = "Tu as gagné 🎉";
        messageElement.classList.add("win");
        wins++;
        playSound("winSound");

    } else {
        messageElement.textContent = "Tu as perdu 😢";
        messageElement.classList.add("lose");
        losses++;
        playSound("loseSound");
    }

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("draws").textContent = ties;
}

// function sound
function playSound(id){
    let audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
}

// reset
function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;

    document.getElementById("wins").textContent = 0;
    document.getElementById("losses").textContent = 0;
    document.getElementById("draws").textContent = 0;

    document.getElementById("message").textContent = "Résultat...";
}