// background

function drawBackground() {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, 600, 500);
  ctx.fillStyle = "yellow";
  ctx.arc(45, 45, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(-10, 520);
  ctx.lineTo(300, 100);
  ctx.lineTo(620, 520);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-1000, 1200);
  ctx.lineTo(100, 160);
  ctx.lineTo(280, 340);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(320, 320);
  ctx.lineTo(510, 160);
  ctx.lineTo(1800, 1300);
  ctx.closePath();
  ctx.fill();
}

// draw tower (x, y, buildingColor)

function drawTower(x, y, buildingColor) {
  ctx.fillStyle = buildingColor;
  ctx.fillRect(x, y, 100, 350); // x = 200 and y = 80
  ctx.fillStyle = "yellow";
  ctx.fillRect(x + 15, y + 10, 25, 25);
  ctx.fillRect(x + 60, y + 10, 25, 25);
  ctx.fillRect(x + 15, y + 60, 25, 25);
  ctx.fillRect(x + 60, y + 60, 25, 25);
  ctx.fillRect(x + 15, y + 110, 25, 25);
  ctx.fillRect(x + 60, y + 110, 25, 25);
  ctx.fillRect(x + 15, y + 160, 25, 25);
  ctx.fillRect(x + 60, y + 160, 25, 25);
  ctx.fillRect(x + 15, y + 210, 25, 25);
  ctx.fillRect(x + 60, y + 210, 25, 25);
  ctx.fillRect(x + 15, y + 260, 25, 25);
  ctx.fillRect(x + 60, y + 260, 25, 25);
  ctx.fillRect(x + 15, y + 310, 25, 25);
  ctx.fillRect(x + 60, y + 310, 25, 25);
}

// draw house (x, y, buildingColor)

function drawHouse(x, y, buildingColor) {
  ctx.fillStyle = buildingColor;
  ctx.fillRect(x, y, 100, 50); // x = 30 and y = 100
  ctx.fillStyle = buildingColor;
  ctx.beginPath();
  ctx.moveTo(x - 10, y);
  ctx.lineTo(x + 50, y - 30);
  ctx.lineTo(x + 110, y);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "yellow";
  ctx.fillRect(x + 60, y + 15, 20, 20);
  ctx.fillStyle = "brown";
  ctx.fillRect(x + 15, y + 20, 20, 30);
}

// draw tree (x, y, leafColor)

function drawTree(x, y, treeLeafColor) {
  ctx.fillStyle = "brown";
  ctx.fillRect(x, y, 10, 60); // x = 420 and y = 200
  ctx.fillStyle = treeLeafColor;
  ctx.beginPath();
  ctx.moveTo(x - 10, y + 20);
  ctx.lineTo(x + 5, y);
  ctx.lineTo(x + 20, y + 20);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x - 10, y);
  ctx.lineTo(x + 5, y - 20);
  ctx.lineTo(x + 20, y);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x - 10, y - 20);
  ctx.lineTo(x + 5, y - 40);
  ctx.lineTo(x + 20, y - 20);
  ctx.closePath();
  ctx.fill();
}

function getTowerColor() {
  let towerColor = prompt("What color are the towers?");
  return towerColor;
}

function getHouseColor() {
  let houseColor = prompt("What color are the houses?");
  return houseColor;
}

function getTreeColor() {
  let treeColor = prompt("What color are the tree leaves?");
  return treeColor;
}
