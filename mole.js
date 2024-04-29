//3create variables
let currMoleTile;
let currPlantTile;
//1
window.onload = function() {
    setGame();
}
//2
function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 2000);
}
function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString();
}
 
function setMole() {

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    //randomly place the mole on 1 of the tiles
    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function setPlant() {
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}