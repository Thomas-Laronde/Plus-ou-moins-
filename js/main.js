document.addEventListener("DOMContentLoaded", function () {
    const guessInput = document.getElementById("guessInput");
    const submitGuess = document.getElementById("submitGuess");
    const result = document.getElementById("result");
    const resetGame = document.getElementById("resetGame");
    const attemptsList = document.getElementById("attemptsList");

    let entier;
    let attempts;
    let gameHistory = [];

    function initGame() {
        entier = entierAleatoire(1, 100); 
        attempts = 0;
        guessInput.value = "";
        guessInput.disabled = false;
        submitGuess.disabled = false;
        resetGame.style.display = "none";
        result.textContent = "Trouvez le nombre entre 1 et 100 !";
    }

    function entierAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function handleGuess() {
        const enteredNumber = parseInt(guessInput.value);
        if (isNaN(enteredNumber) || enteredNumber < 1 || enteredNumber > 100) {
            result.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
            return;
        }

        attempts++;
        if (enteredNumber < entier) {
            result.textContent = "C'est plus !";
            
        } else if (enteredNumber > entier) {
            result.textContent = "C'est moins !";
        } else {
            result.textContent = `Bravo ! C'était bien ${entier}. Vous avez trouvé en ${attempts} essais.`;
            guessInput.disabled = true;
            submitGuess.disabled = true;
            resetGame.style.display = "inline";
            addToHistory(entier, attempts);
        }
    }

    function addToHistory(number, attempts) {
        gameHistory.push({ number, attempts });
        let historyItem = document.createElement("li");
        historyItem.textContent = `Partie ${gameHistory.length}: Trouvé ${number} en ${attempts} essais.`;
        attemptsList.appendChild(historyItem);
    }

    submitGuess.addEventListener("click", handleGuess);

    resetGame.addEventListener("click", function () {
        initGame();
    });

    // Initialisation de la première partie
    initGame();
});
