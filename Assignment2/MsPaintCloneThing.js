let paletteColors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#00FFFF', '#0000FF', '#FF00FF', '#A52A2A', '#FFFFFF', '#000000'];
let currentColor = '#000000';
let paletteWidth = 50;
let canvasWidth = 600;
let canvasHeight = 400;
//this makes the canvas for the project, also displays the "buttons" to select the differet colors on the color pallet
function setup() {
  createCanvas(canvasWidth + paletteWidth, canvasHeight);
  background(255);

  
  for (let i = 0; i < paletteColors.length; i++) {
    let y = i * (height / paletteColors.length);
    fill(paletteColors[i]);
    rect(width - paletteWidth, y, paletteWidth, height / paletteColors.length);
  }
}
//below fucntion lets you actually draw and registers the mouse input on the canvas
function draw() {
  
  if (mouseIsPressed && mouseX < width - paletteWidth) {
    strokeWeight(5);
    stroke(currentColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
//below code allows the user to select the different color pallet selecitons on the right side of the screen
function mousePressed() {
  
  if (mouseX > width - paletteWidth) {
    let colorIndex = int(mouseY / (height / paletteColors.length));
    currentColor = paletteColors[colorIndex];
  }
}
//this portion is to stop the drawings to overlap over the color pallet selecitons on the right
function mouseDragged() {
  
  if (mouseX < width - paletteWidth) {
    strokeWeight(5);
    stroke(currentColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
