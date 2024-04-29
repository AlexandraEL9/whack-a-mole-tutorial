                   //JS notes

// Global variables to keep track of game state
let currMoleTile; // The current tile where the mole is located
let currPlantTile; // The current tile where the plant is located
let score = 0; // Player's score
let gameOver = false; // Flag to indicate if the game is over

// Function to be called when the window loads
window.onload = function() {
    // Initialize the game
    setGame();
}

// Function to set up the game
function setGame() {
    // Set up the grid in HTML
    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
        // Create a div element for each tile and add event listener for click
        let tile = document.createElement("div");
        tile.id = i.toString(); // Set the ID of the tile
        tile.addEventListener("click", selectTile); // Add click event listener
        document.getElementById("board").appendChild(tile); // Append the tile to the board
    }

    // Set up intervals to call setMole and setPlant functions periodically
    setInterval(setMole, 1000); // Every 1 second, call setMole
    setInterval(setPlant, 2000); // Every 2 seconds, call setPlant
}

// Function to generate a random tile ID
function getRandomTile() {
    // Generate a random number between 0 and 8 (inclusive)
    let num = Math.floor(Math.random() * 9);
    return num.toString(); // Convert the number to string and return
}

// Function to set the mole on a random tile
function setMole() {
    // Check if the game is over
    if (gameOver) {
        return; // If game over, exit the function
    }
    // Clear the current mole tile if it exists
    if (currMoleTile) {
        currMoleTile.innerHTML = ""; // Clear the content of the tile
    }
    // Create an image element for the mole
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png"; // Set the source of the mole image

    // Get a random tile ID for the mole
    let num = getRandomTile();
    // Check if the plant is on the same tile as the mole
    if (currPlantTile && currPlantTile.id == num) {
        return; // If plant and mole on the same tile, exit the function
    }
    // Get the tile element for the mole and append the mole image to it
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

// Function to set the plant on a random tile
function setPlant() {
    // Check if the game is over
    if (gameOver) {
        return; // If game over, exit the function
    }
    // Clear the current plant tile if it exists
    if (currPlantTile) {
        currPlantTile.innerHTML = ""; // Clear the content of the tile
    }
    // Create an image element for the plant
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png"; // Set the source of the plant image

    // Get a random tile ID for the plant
    let num = getRandomTile();
    // Check if the mole is on the same tile as the plant
    if (currMoleTile && currMoleTile.id == num) {
        return; // If mole and plant on the same tile, exit the function
    }
    // Get the tile element for the plant and append the plant image to it
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

// Function to handle tile selection by the player
function selectTile() {
    // Check if the game is over
    if (gameOver) {
        return; // If game over, exit the function
    }
    // Check if the clicked tile is the mole
    if (this == currMoleTile) {
        score += 10; // Increase the score by 10
        document.getElementById("score").innerText = score.toString(); // Update score display
    }
    // Check if the clicked tile is the plant
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); // Update score display
        gameOver = true; // Set game over flag to true
    }
}




To improve game- 
           add timed element/ rounds
           add levels- FileSystemWritableFileStream/ slower appearance of mole
           add sounds when click on image ding/ buzzers
