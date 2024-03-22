document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    const guessDiv = document.getElementById('guess');
    const guessNumber = document.getElementById('guessNumber');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const resultText = document.getElementById('result');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        guessDiv.style.display = 'block';
        guessNumber.innerText = 50; // Empezamos a adivinar desde la mitad del rango (50)
    });

    yesButton.addEventListener('click', () => {
        resultText.innerText = `Tu número es el ${guessNumber.innerText}, ¡excelente decisión!`;
    });

    noButton.addEventListener('click', () => {
        let lowerBound = parseInt(guessNumber.innerText) + 1;
        let upperBound = 100;
        let newGuess = Math.floor((lowerBound + upperBound) / 2);
        guessNumber.innerText = newGuess;
    });
});