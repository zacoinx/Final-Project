
class Character {

  constructor() {
    this.x = 180;
    this.y = 400;
    this.width = 40;
    this.height = 40;
    this.velocityY= 0;
  }

move(){
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    this.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    this.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    this.y += 5;
  }

  this.y += this.velocityY;
  this.velocityY += 0.5; // Gravity

  // Keep the character within canvas 
  this.x = constrain(this.x, 0, width - this.width);

  if(this.y > height - this.height) {
    this.y = height - this.height;
    this.velocityY = 0;
  }
}

jump() {
  if(this.velocityY === 0) { // jump if on the ground
    this.velocityY = -10; // Jump strength
  }
}

display() {
    fill(50, 200, 80);
    rect(this.x, this.y, this.width, this.height);
  }
}

function keyPressed() {
  if (key === ' ') {
    character.jump();
  }
}