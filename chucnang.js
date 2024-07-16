const squares = document.querySelectorAll('.square');
const scoreDisplay = document.getElementById('score');
let score = 0;
let molePosition;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.classList.add('mole');

    molePosition = randomSquare.id;
}

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == molePosition) {
            score++;
            scoreDisplay.textContent = score;
            molePosition = null;
        }
    });
});

moveMole();
