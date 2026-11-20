let character;

function setup() {
  createCanvas(500, 600);

  character = new Character();
}

function draw() {
  background(220);

character.move();
  character.display();
}