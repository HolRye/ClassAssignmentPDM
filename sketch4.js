function setup() {
    createCanvas(400, 400);
    stroke(255);
    strokeWeight(6);
  }
  
  function draw() {
    background(0, 0, 128);
    
    
    fill('green'); 
    circle(200, 205, 300);
  
    fill('red')
    beginShape();
  vertex(200, 50);
  vertex(250, 150);
  vertex(350, 150);
  vertex(275, 225);
  vertex(300, 325);
  vertex(200, 275);
  vertex(100, 325);
  vertex(125, 225);
  vertex(50, 150);
  vertex(150, 150);
  endShape(CLOSE);
  }