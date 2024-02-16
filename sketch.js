let character;
let characters = [];

function preload() {
  // Load the sprite sheets
  character = loadSpriteSheet('spriteAssets/character.png', 32, 32, 8); // Assuming each frame is 32x32 and there are 8 frames
}

function setup() {
  createCanvas(800, 600);

  // Instantiate several characters at random positions
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    characters.push(new Character(x, y));
  }
}

function draw() {
  background(220);
  image(character,200,200,80,80,0,0,80,80);

  // Handle user control for all characters
  for (let i = 0; i < characters.length; i++) {
    characters[i].control();
    characters[i].update();
    characters[i].display();
  }
}

class Character {
  constructor(x, y) {
    this.sprite = createSprite(x, y, 32, 32);
    this.sprite.addAnimation('stand', loadAnimation(character));
    this.sprite.addAnimation('walkRight', loadAnimation(character));
    this.sprite.addAnimation('walkLeft', loadAnimation(character)); // Left-facing animation will be mirrored

    // Define walking animation frames
    this.sprite.animation.frameDelay = 8; // Adjust this value according to the sprite sheet

    // Initialize direction
    this.direction = 'stand';
  }

  control() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.direction = 'walkRight';
      this.sprite.mirrorX(1); // Reset mirroring if previously facing left
      this.sprite.velocity.x = 1;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.direction = 'walkLeft';
      this.sprite.mirrorX(-1); // Flip sprite horizontally for left-facing animation
      this.sprite.velocity.x = -1;
    } else {
      this.direction = 'stand';
      this.sprite.velocity.x = 0;
    }
  }

  update() {
    // Update sprite animation based on direction
    this.sprite.changeAnimation(this.direction);

    // Update sprite position
    this.sprite.position.x += this.sprite.velocity.x;
  }

  display() {
    drawSprites();
  }
}
