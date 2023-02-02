/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.             */
/* There should always be a javaScript file with the same name as the html file. */
/* This file always holds the playGame function().                               */
/* It also holds game specific code, which will be different for each game       */


/*const main = document.querySelector("main");
import ("/js/Database.js").then((initialiseApp) => {
    initialiseApp.loadPageInto(main);
});*/

/*(async () => {
    if (1) {
        await import("/js/Database.js");
    }
})();*/


console.log(document.getElementById("xd").innerHTML);



/******************** Declare game specific global data and functions *****************/
/* images must be declared as global, so that they will load before the game starts  */


let beeImage = new Image();
beeImage.src = "images/bee.png";

let waspImage = new Image();
waspImage.src = "images/wasp.png"

let background = new Image;
background.src = "images/map.png";

let hudImage = new Image;
hudImage.src = "images/HUD.png";

let collisionImage = new Image;
collisionImage.src = "images/collision.png";

let flowerImage1 = new Image;
flowerImage1.src = "images/flower1.png";

let flowerImage2 = new Image;
flowerImage2.src = "images/flower2.png";

let flowerImage3 = new Image;
flowerImage3.src = "images/flower3.png";

let flowerImage4 = new Image;
flowerImage4.src = "images/flower4.png";

let flowerImage5 = new Image;
flowerImage5.src = "images/flower5.png";

let flowerImage6 = new Image;
flowerImage6.src = "images/flower6.png";


/* Direction that the skeleton is walking */
/* Note that this matches the row in the gameObject image for the given direction */
const UP = 0;
const LEFT = 1;
const DOWN = 2;
const RIGHT = 3;
const UPLEFT = 4;
const UPRIGHT = 5;
const DOWNLEFT = 6;
const DOWNRIGHT = 7;
const STOPPED = 8;

//const scoresRef = firebase.firestore().collection("books");

/* The various gameObjects */
/* These are the positions that each gameObject is held in the gameObjects[] array */
const BACKGROUND = 0;
const BEE = 1;
const WASP = 2;
const HUD = 3;
const WIN_MESSAGE = 4;
const LOSE_LIFE_MESSAGE = 5;
const LOSE_MESSAGE = 6;
const HUDLEVEL = 7;
const HUDPOINTS = 8;
const HUDTIME = 9;

let flowers = [];
let arrayX = [];
let hudtext = [];
let hearts = 3;
let level = 0;
let points = 0;
let wasps = [];
let countdPRIM = 240;
let countd = countdPRIM;


let flower_counters=[0,0,0,0,0,0];
let flower_level=[0,0,0,0,0,0];
let flower_font = ["black", "black", "black", "black", "black", "black"];

/******************* END OF Declare game specific data and functions *****************/




/* Always have a playGame() function                                     */
/* However, the content of this function will be different for each game */
function playGame()
{
    /* We need to initialise the game objects outside of the Game class */
    /* This function does this initialisation.                          */
    /* This function will:                                              */
    /* 1. create the various game game gameObjects                   */
    /* 2. store the game gameObjects in an array                     */
    /* 3. create a new Game to display the game gameObjects          */
    /* 4. start the Game                                                */


    /* Create the various gameObjects for this game. */
    /* This is game specific code. It will be different for each game, as each game will have it own gameObjects */


    gameObjects[BACKGROUND] = new MovingBg(background);
    gameObjects[BEE] = new MazeBee(beeImage, 50, 150);
    gameObjects[HUD] = new StaticImage(hudImage, 0, 0, 500, 100);
    gameObjects[HUDLEVEL] = new StaticText("Level " + level, 300, 30, "Times Roman", 25, "black");
    gameObjects[HUDPOINTS] = new StaticText("Points: " + points, 300, 60, "Times Roman", 25, "black");
    gameObjects[HUDTIME] = new Timer(countd, 300, 90, "Times Roman", 25, "black");



    /* END OF game specific code. */


    /* Always create a game that uses the gameObject array */
    let game = new NewCanvasGame(collisionImage);

    /* Always play the game */
    game.start();

    /* If they are needed, then include any game-specific mouse and keyboard listners */
    document.addEventListener('keydown', function (e)
    {
        if (e.keyCode === 37)  // left
        {
            gameObjects[BEE].setDirection(LEFT);
        }
        else if (e.keyCode === 38) // up
        {
            gameObjects[BEE].setDirection(UP);
        }
        else if (e.keyCode === 39) // right
        {
            gameObjects[BEE].setDirection(RIGHT);
        }
        else if (e.keyCode === 40) // down
        {
            gameObjects[BEE].setDirection(DOWN);
        }
    });
}