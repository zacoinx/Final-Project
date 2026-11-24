
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
    this.velocityY = -16; // Jump strength
  }
}

    display() {
  // Body
  fill(80, 200, 100);
  stroke(30, 120, 50);
  strokeWeight(2);
  ellipse(this.x + 20, this.y + 20, 40, 45);

  // Eyes
  fill(255);
  ellipse(this.x + 13, this.y + 15, 11, 13);
  ellipse(this.x + 27, this.y + 15, 11, 13);

  // Pupils
  fill(0);
  ellipse(this.x + 14, this.y + 16, 5, 6);
  ellipse(this.x + 28, this.y + 16, 5, 6);

  // Smile
  noFill();
  stroke(0);
  arc(this.x + 20, this.y + 23, 14, 9, 0, PI);

  // Feet
  fill(50, 150, 70);
  ellipse(this.x + 10, this.y + 43, 15, 7);
  ellipse(this.x + 30, this.y + 43, 15, 7);
}
  }


function keyPressed() {
  if (key === ' ') {
    character.jump();
  }
}