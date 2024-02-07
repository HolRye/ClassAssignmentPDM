function setup() {
  createCanvas(600, 300);
}

function draw() {
  noStroke();
  background(0);

  
  push(); 
  translate(150, 150); 
  rotate(-radians(85)); 
  fill('yellow');
  arc(0, 0, 200, 200, 200, PI + QUARTER_PI, PIE);
  pop(); 

  fill('red');
  rect(350, 50, 200, 200, 100, 100, 0, 0);
  ellipseMode(RADIUS);

//eyeball 1
fill(255);
ellipse(400, 145, 30, 30);
ellipseMode(CENTER);
fill('blue');
ellipse(400, 145, 30, 30);

//eyeball 2
fill(255);
ellipse(500, 145, 60, 60);
ellipseMode(CENTER);
fill('blue');
ellipse(500, 145, 30, 30);



}