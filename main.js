import Character from "./character";

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

const gameCharacter = new Character(100, 300, 100, 100);

function draw () {

    background("grey");


}