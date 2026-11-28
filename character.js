
export default class Character {
  xPos;
  yPos;
  width;
  height;
  velocityY;


  constructor(x, y, width, height, velocityY) {
    this.xPos = x;
    this.yPos = y;
    this.width = width;
    this.height = height;
    this.velocityY= velocityY;
  }


move(platforms = []) {
  // Remember the previous position
  const previousY = this.yPos;

  if (keyIsDown(LEFT_ARROW)) {
    this.xPos -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    this.xPos += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    this.yPos -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    this.yPos += 5;
  }

  // Gravity
  this.yPos += this.velocityY;
  this.velocityY += 0.5;

  // Keep character inside canvas
  this.xPos = constrain(this.xPos, 0, width - this.width);

  // Platform collision detection
  if (this.velocityY > 0) {
    for (const platform of platforms) {
      const previousBottom = previousY + this.height;
      const currentBottom = this.yPos + this.height;

      const landedOnPlatform =
        previousBottom <= platform.y &&
        currentBottom >= platform.y;

      const overlapsPlatform =
        this.xPos + this.width > platform.x &&
        this.xPos < platform.x + platform.width;

      if (landedOnPlatform && overlapsPlatform) {
        this.yPos = platform.y - this.height;
        this.velocityY = 0;
        break;
      }
    }
  }

  // Ground collision
  if (this.yPos > height - this.height) {
    this.yPos = height - this.height;
    this.velocityY = 0;
  }
}



jump() {
  if(this.velocityY === 0) { // jump if on the ground
    this.velocityY = -16; // Jump strength
  }
}

design () {
  const centerX = this.xPos + this.width / 2;
  const centerY = this.yPos + this.height / 2;

  // Body
  fill(80, 200, 100);
  stroke(30, 120, 50);
  strokeWeight(2);
  ellipse(centerX, centerY, this.width, this.height);

  // Eyes
  fill(255);
  ellipse(centerX - this.width * 0.175, centerY - this.height * 0.11, this.width * 0.275, this.height * 0.29);
  ellipse(centerX + this.width * 0.175, centerY - this.height * 0.11, this.width * 0.275, this.height * 0.29);

  // Pupils
  fill(0);
  ellipse(centerX - this.width * 0.15, centerY - this.height * 0.09, this.width * 0.125, this.height * 0.13);
  ellipse(centerX + this.width * 0.2, centerY - this.height * 0.09, this.width * 0.125, this.height * 0.13);

  // Smile
  noFill();
  stroke(0);
  arc(centerX, centerY + this.height * 0.07, this.width * 0.35, this.height * 0.2, 0, PI);

  // Feet
  fill(50, 150, 70);
  ellipse(this.xPos + this.width * 0.25, this.yPos + this.height * 0.97, this.width * 0.375, this.height * 0.16);
  ellipse(this.xPos + this.width * 0.75, this.yPos + this.height * 0.97, this.width * 0.375, this.height * 0.16);
}
  }