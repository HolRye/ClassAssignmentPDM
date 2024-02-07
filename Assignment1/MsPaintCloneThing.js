let paletteColors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#00FFFF', '#0000FF', '#FF00FF', '#A52A2A', '#FFFFFF', '#000000'];
let currentColor = '#000000';
let paletteWidth = 50;
let paletteHeight = 30;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth + paletteWidth, canvasHeight);
  background(255);

  //this makes the canvas for the project, also displays the "buttons" to select the differet colors on the color pallet on the left side of the screen
  for (let i = 0; i < paletteColors.length; i++) {
    let x = 0;
    let y = i * paletteHeight;
    fill(paletteColors[i]);
    rect(x, y, paletteWidth, paletteHeight);
  }
}

function draw() {
  //below fucntion lets you actually draw and registers the mouse input on the canvas
  if (mouseIsPressed && mouseX > 0 && mouseX < paletteWidth && mouseY < height) {
    strokeWeight(5);
    stroke(currentColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function mousePressed() {
//below code allows the user to select the different color pallet selecitons on the left side of the screen
  if (mouseX > 0 && mouseX < paletteWidth && mouseY < height) {
    let colorIndex = int(mouseY / paletteHeight);
    currentColor = paletteColors[colorIndex];
  }
}

function mouseDragged() {
//this portion is to stop the drawings to overlap over the color pallet selecitons on the left
  if (mouseX > paletteWidth && mouseY < height) {
    strokeWeight(5);
    stroke(currentColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}