
export default class Platform {
  constructor(x, y, width, height = 12) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(150, 75, 0);
    stroke(100, 50, 0);
    rect(this.x, this.y, this.width, this.height, 6);
  }
}
