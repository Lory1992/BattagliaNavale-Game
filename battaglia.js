const startButton = document.getElementById("startButton");
const gameGrid = document.getElementById("gameGrid");
const gridSize = 5; // Dimensione della griglia (5x5)
const shipPositions = []; // Posizioni delle navi

// Funzione per inizializzare la griglia
function createGrid() {
    gameGrid.innerHTML = ""; // Ripulisce la griglia
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("button");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", () => checkHit(cell));
        gameGrid.appendChild(cell);
    }
}

// Funzione per posizionare le navi
function placeShips() {
    shipPositions.length = 0; // Ripulisce le posizioni delle navi
    while (shipPositions.length < 3) { // Tre navi sulla griglia
        const position = Math.floor(Math.random() * (gridSize * gridSize));
        if (!shipPositions.includes(position)) {
            shipPositions.push(position);
        }
    }
    console.log("Posizioni delle navi:", shipPositions); // Debug
}

// Funzione per controllare un colpo
function checkHit(cell) {
    const index = parseInt(cell.dataset.index);
    if (shipPositions.includes(index)) {
        cell.classList.add("hit");
        cell.textContent = "X";
        shipPositions.splice(shipPositions.indexOf(index), 1); // Rimuovi la nave colpita
        if (shipPositions.length === 0) {
            alert("Hai vinto! Tutte le navi sono state affondate.");
            startButton.style.display = "block";
            gameGrid.style.display = "none";
        }
    } else {
        cell.classList.add("miss");
        cell.textContent = "O";
    }
}

// Funzione per avviare il gioco
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    gameGrid.style.display = "grid";
    createGrid();
    placeShips();
});
