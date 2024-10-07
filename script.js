// Functions Module Assignment

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 500;

// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

let towerColor = getTowerColor();
let houseColor = getHouseColor();
let treeColor = getTreeColor();

// Call the draw functions below:

drawBackground();

drawTower(150, 80, towerColor);
drawTower(400, 300, towerColor);

drawHouse(275, 392, houseColor);
drawHouse(27, 420, houseColor);
drawHouse(475, 215, houseColor);

drawTree(410, 210, treeColor);
drawTree(300, 252, treeColor);
drawTree(65, 250, treeColor);
