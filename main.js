import Character from "./character";
import Platform from "./Platform.js";

function setup (){
    createCanvas(500, 500);
}

const gameState = {
    win: "gameWon",
    lose: "gameLost",
    intro: "gameIntro",
    active: "gameActive",
};

let currentGameState = gameState.intro;

const gameCharacter = new Character(180, 400, 40, 45, 0);
const platforms = [
    new Platform(150, 460, 100),
    new Platform(50, 350, 100),
    new Platform(280, 250, 100),
    new Platform(100, 150, 100),
    new Platform(300, 100, 100),
    new Platform(400, 200, 100),
    new Platform(50, 250, 100),

];

function draw () {
    background("grey");
    platforms.forEach(platform => {
    platform.display();
});   
    gameCharacter.move(platforms);
    gameCharacter.design();  
}

function keyPressed() {
    if (key === ' ') {
        gameCharacter.jump();
    }
}