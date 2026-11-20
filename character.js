class Character {
  constructor() {
    this.x = 180;
    this.y = 400;
    this.width = 40;
    this.height = 40;
  }

  display() {
    fill(50, 200, 80);
    rect(this.x, this.y, this.width, this.height);
  
  }
}