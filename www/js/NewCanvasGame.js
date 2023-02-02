class NewCanvasGame extends CanvasGame
{
    constructor(collisionImage)
    {
        super();
        gameObjects[HUDTIME].clockstart();
        for (let i = 0 ; i < 3; i++)
        {
            flowers.push(new Flower());
            arrayX.push(flowers[i].getX());
        }
        wasps.push(new MazeWasp(waspImage));
        
        for (let i = 0; i< wasps.length; i++)
        {
            wasps[i].start();
        }

        do 
        {
            flowers[0] = new Flower();
        } while (flowers[0].getFlag() != 1);


        let collisionOffscreenCanvas = document.createElement('canvas');
        this.collisionCtx = collisionOffscreenCanvas.getContext('2d');
        collisionOffscreenCanvas.width = canvas.width*2;
        collisionOffscreenCanvas.height = canvas.height;
        this.collisionCtx.drawImage(collisionImage, 0, canvas.height/6, canvas.width, canvas.height*5/6);

        
        flower_level.splice(0,6,1,1,1,0,0,0);

        hudtext.push(new StaticText(flower_counters[0] + "/" + flower_level[0], 60, 33,  "Times Roman", 25, flower_font[0])); //flo1
        hudtext.push(new StaticText(flower_counters[1] + "/" + flower_level[1], 155, 33, "Times Roman", 25, flower_font[0])); //flo2
        hudtext.push(new StaticText(flower_counters[2] + "/" + flower_level[2], 250, 33, "Times Roman", 25, flower_font[0])); //flo3
        hudtext.push(new StaticText(flower_counters[3] + "/" + flower_level[3], 60, 83,  "Times Roman", 25, flower_font[0])); //flo4
        hudtext.push(new StaticText(flower_counters[4] + "/" + flower_level[4], 155, 83, "Times Roman", 25, flower_font[0])); //flo5
        hudtext.push(new StaticText(flower_counters[5] + "/" + flower_level[5], 250, 83, "Times Roman", 25, flower_font[0])); //flo6
        hudtext.push(new StaticText(hearts, 452, 93, "Times Roman", 40, "red")); //hearts

    }

    collisionDetection()
    {
        if (!this.collisionCtx)
        {
            
        }
        if (gameObjects[BEE].getDirection() === UP)
        {
            let imageData = this.collisionCtx.getImageData(gameObjects[BEE].getCentreX(), gameObjects[BEE].getCentreY() - 15, 1, 1);
            if (imageData.data[3] !== 0)
            {
                gameObjects[BEE].setDirection(DOWN);
            }
        }
        else if (gameObjects[BEE].getDirection() === LEFT)
        {
            let imageData = this.collisionCtx.getImageData(gameObjects[BEE].getCentreX()-10, gameObjects[BEE].getCentreY(), 1, 1); //+485??
            if (imageData.data[3] !== 0)
            {
                gameObjects[BEE].setDirection(RIGHT);
            }
        }
        else if (gameObjects[BEE].getDirection() === DOWN)
        {
            let imageData = this.collisionCtx.getImageData(gameObjects[BEE].getCentreX(), gameObjects[BEE].getCentreY() + 15, 1, 1);
            if (imageData.data[3] !== 0)
            {
                gameObjects[BEE].setDirection(UP);
            }
        }
        else if (gameObjects[BEE].getDirection() === RIGHT)
        {
            let imageData = this.collisionCtx.getImageData(gameObjects[BEE].getCentreX()+10, gameObjects[BEE].getCentreY(), 1, 1);
            if (imageData.data[3] !== 0)
            {
                gameObjects[BEE].setDirection(LEFT);
            }
        }

        
        for (let f = 0; f < flowers.length; f++)
        {
            if (flowers[f].pointIsInsideBoundingRectangle(gameObjects[BEE].getCentreX(), gameObjects[BEE].getCentreY()))
            {
                flower_counters[flowers[f].getFlag()-1]++;
                points +=10;
                gameObjects[HUDPOINTS] = new StaticText("Points: " + points, 300, 60, "Times Roman", 25, "black");
                gameObjects[HUDPOINTS].start();

                if (flower_counters[flowers[f].getFlag()-1] == flower_level[flowers[f].getFlag()-1])
                {
                    flower_font[flowers[f].getFlag()-1] = "green";
                }
                else if (flower_counters[flowers[f].getFlag()-1] > flower_level[flowers[f].getFlag()-1])
                {
                    for (let i = 0 ; i<flower_level.length ; i++)
                    {
                        flower_level[i]++;
                        flower_font[i] = "red";
                    }
                    points -= 50 * level;
                    if (points < 0)
                    {
                        points = 0;
                    }
                    gameObjects[HUDPOINTS] = new StaticText("Points: " + points, 300, 60, "Times Roman", 25, "black");
                    gameObjects[HUDPOINTS].start();
                    console.log(flowers[f].getFlag() + ": " + flower_counters[flowers[f].getFlag()-1]);
                    hudtext[0] = new StaticText(flower_counters[0] + "/" + flower_level[0], 60, 33,  "Times Roman", 25, flower_font[0]); //flo1
                    hudtext[1] = new StaticText(flower_counters[1] + "/" + flower_level[1], 155, 33, "Times Roman", 25, flower_font[1]); //flo2
                    hudtext[2] = new StaticText(flower_counters[2] + "/" + flower_level[2], 250, 33, "Times Roman", 25, flower_font[2]); //flo3
                    hudtext[3] = new StaticText(flower_counters[3] + "/" + flower_level[3], 60, 83,  "Times Roman", 25, flower_font[3]); //flo4
                    hudtext[4] = new StaticText(flower_counters[4] + "/" + flower_level[4], 155, 83, "Times Roman", 25, flower_font[4]); //flo5
                    hudtext[5] = new StaticText(flower_counters[5] + "/" + flower_level[5], 250, 83, "Times Roman", 25, flower_font[5]); //flo6
                    setTimeout(function (){
                        for (let i = 0 ; i<flower_level.length ; i++)
                        {
                            flower_font[i] = "black";
                        }
                        hudtext[0] = new StaticText(flower_counters[0] + "/" + flower_level[0], 60, 33,  "Times Roman", 25, flower_font[0]); //flo1
                        hudtext[1] = new StaticText(flower_counters[1] + "/" + flower_level[1], 155, 33, "Times Roman", 25, flower_font[1]); //flo2
                        hudtext[2] = new StaticText(flower_counters[2] + "/" + flower_level[2], 250, 33, "Times Roman", 25, flower_font[2]); //flo3
                        hudtext[3] = new StaticText(flower_counters[3] + "/" + flower_level[3], 60, 83,  "Times Roman", 25, flower_font[3]); //flo4
                        hudtext[4] = new StaticText(flower_counters[4] + "/" + flower_level[4], 155, 83, "Times Roman", 25, flower_font[4]); //flo5
                        hudtext[5] = new StaticText(flower_counters[5] + "/" + flower_level[5], 250, 83, "Times Roman", 25, flower_font[5]); //flo6
                    }, 2000);

                }
                hudtext[0] = new StaticText(flower_counters[0] + "/" + flower_level[0], 60, 33,  "Times Roman", 25, flower_font[0]); //flo1
                hudtext[1] = new StaticText(flower_counters[1] + "/" + flower_level[1], 155, 33, "Times Roman", 25, flower_font[1]); //flo2
                hudtext[2] = new StaticText(flower_counters[2] + "/" + flower_level[2], 250, 33, "Times Roman", 25, flower_font[2]); //flo3
                hudtext[3] = new StaticText(flower_counters[3] + "/" + flower_level[3], 60, 83,  "Times Roman", 25, flower_font[3]); //flo4
                hudtext[4] = new StaticText(flower_counters[4] + "/" + flower_level[4], 155, 83, "Times Roman", 25, flower_font[4]); //flo5
                hudtext[5] = new StaticText(flower_counters[5] + "/" + flower_level[5], 250, 83, "Times Roman", 25, flower_font[5]); //flo6
                

                do 
                {
                flowers[f] = new Flower();
                } while (flower_counters[flowers[f].getFlag()-1] >= flower_level[flowers[f].getFlag()-1] && !(flower_counters[0] === flower_level[0] && flower_counters[1] === flower_level[1] && flower_counters[2] === flower_level[2] && flower_counters[3] === flower_level[3] && flower_counters[4] === flower_level[4] && flower_counters[5] === flower_level[5]));


                arrayX[f]=flowers[f].getX();
                if (flower_counters[0] === flower_level[0] && flower_counters[1] === flower_level[1] && flower_counters[2] === flower_level[2] && flower_counters[3] === flower_level[3] && flower_counters[4] === flower_level[4] && flower_counters[5] === flower_level[5])
                {
                    for (let i = 0; i < gameObjects.length; i++) /* stop all gameObjects from animating */
                    {
                        gameObjects[i].stop();
                    }
                    gameObjects[HUDTIME].clockstop();
                    points += 100 * level + countd;
                    gameObjects[HUDPOINTS] = new StaticText("Points: " + points, 300, 60, "Times Roman", 25, "black");
                    gameObjects[HUDPOINTS].start();

                    for (let i=0; i<wasps.length; i++)
                    {
                        wasps[i].stop();
                    }
                    hudtext[0] = new StaticText(flower_counters[0] + "/" + flower_level[0], 60, 33,  "Times Roman", 25, flower_font[0]); //flo1
                    hudtext[1] = new StaticText(flower_counters[1] + "/" + flower_level[1], 155, 33, "Times Roman", 25, flower_font[1]); //flo2
                    hudtext[2] = new StaticText(flower_counters[2] + "/" + flower_level[2], 250, 33, "Times Roman", 25, flower_font[2]); //flo3
                    hudtext[3] = new StaticText(flower_counters[3] + "/" + flower_level[3], 60, 83,  "Times Roman", 25, flower_font[3]); //flo4
                    hudtext[4] = new StaticText(flower_counters[4] + "/" + flower_level[4], 155, 83, "Times Roman", 25, flower_font[4]); //flo5
                    hudtext[5] = new StaticText(flower_counters[5] + "/" + flower_level[5], 250, 83, "Times Roman", 25, flower_font[5]); //flo6
                    gameObjects[WIN_MESSAGE] = new StaticText("Level Cleared!", 120, 280, "Times Roman", 50, "green");
                    gameObjects[WIN_MESSAGE].start();
                    if (typeof gameObjects[LOSE_LIFE_MESSAGE] != "undefined")
                    {
                    gameObjects[LOSE_LIFE_MESSAGE].stopAndHide();
                    }
                    setTimeout(function (){
                        gameObjects[BACKGROUND].setX(0);
                        gameObjects[BEE].setCentreX(50);
                        gameObjects[BEE].setCentreY(150);
                        
                        gameObjects[BEE].start();
                        gameObjects[BACKGROUND].start();
                        gameObjects[WIN_MESSAGE].stopAndHide();
                        countdPRIM+=60;
                        if (level == 1)
                        {
                        flower_level.splice(0,6,3,2,1,0,0,0);
                        flower_counters.splice(0,6,0,0,0,0,0,0);
                        wasps.push(new MazeWasp(waspImage));
                        }
                        else if (level == 2)
                        {
                            flower_level.splice(0,6,5,3,2,0,0,0);
                            flower_counters.splice(0,6,0,0,0,0,0,0);
                            wasps.push(new MazeWasp(waspImage));
                        }
                        else if (level == 3)
                        {
                            flower_level.splice(0,6,7,5,3,2,1,0);
                            flower_counters.splice(0,6,0,0,0,0,0,0);
                            wasps.push(new MazeWasp(waspImage));
                        }
                        else if (level == 4)
                        {
                            flower_level.splice(0,6,9,7,5,3,2,1);
                            flower_counters.splice(0,6,0,0,0,0,0,0);
                            wasps.push(new MazeWasp(waspImage));
                        }
                        else if (level == 5)
                        {
                            flower_level.splice(0,6,9,9,9,6,4,3);
                            flower_counters.splice(0,6,0,0,0,0,0,0);
                            wasps.push(new MazeWasp(waspImage));
                        }
                        else if (level == 6)
                        {
                            if (saveFlag == false)
                            {
                            window.FirebaseSave(namePlayer, points);
                            saveFlag = true;
                            }
                        }
                        //DELETE "0" LEVEL!!!
                        gameObjects[HUDLEVEL] = new StaticText("Level " + level, 300, 30, "Times Roman", 25, "black");
                        gameObjects[HUDPOINTS] = new StaticText("Points: " + points, 300, 60, "Times Roman", 25, "black");
                        gameObjects[HUDLEVEL].start();
                        gameObjects[HUDPOINTS].start();
                        countd = countdPRIM;
                        gameObjects[HUDTIME].clockstart();

                        for (let i=0; i<wasps.length; i++)
                        {
                            wasps[i] = new MazeWasp(waspImage);
                            wasps[i].start();
                        }
                        for (let i=0; i<flowers.length; i++)
                        {
                            flowers[i] = new Flower();
                        }
                        flower_font.splice(0,6,"black","black","black","black","black","black");
                        hudtext[0] = new StaticText(flower_counters[0] + "/" + flower_level[0], 60, 33,  "Times Roman", 25, flower_font[0]); //flo1
                        hudtext[1] = new StaticText(flower_counters[1] + "/" + flower_level[1], 155, 33, "Times Roman", 25, flower_font[1]); //flo2
                        hudtext[2] = new StaticText(flower_counters[2] + "/" + flower_level[2], 250, 33, "Times Roman", 25, flower_font[2]); //flo3
                        hudtext[3] = new StaticText(flower_counters[3] + "/" + flower_level[3], 60, 83,  "Times Roman", 25, flower_font[3]); //flo4
                        hudtext[4] = new StaticText(flower_counters[4] + "/" + flower_level[4], 155, 83, "Times Roman", 25, flower_font[4]); //flo5
                        hudtext[5] = new StaticText(flower_counters[5] + "/" + flower_level[5], 250, 83, "Times Roman", 25, flower_font[5]); //flo6
                    }, 2000);
                    
                    level ++;
                }
            }
        }

        for (let i = 0; i<wasps.length; i++)
        {
            if (wasps[i].pointIsInsideBoundingRectangle(gameObjects[BEE].getCentreX(), gameObjects[BEE].getCentreY()) || countd < 0)
            {
                countd = 0.01;
                gameObjects[HUDTIME].clockstop();
                if (hearts>=2)
                {
                for (let i = 0; i < gameObjects.length; i++)
                {
                    gameObjects[i].stop();
                }
                for (let i=0; i<wasps.length; i++)
                {
                    wasps[i].stop();
                }
                if (typeof gameObjects[WIN_MESSAGE] != "undefined")
                {
                gameObjects[WIN_MESSAGE].stopAndHide();
                }
                gameObjects[LOSE_LIFE_MESSAGE] = new StaticText("You lost a life!", 120, 280, "Times Roman", 30, "red");
                gameObjects[LOSE_LIFE_MESSAGE].start();
                gameObjects[BACKGROUND].setX(0);
                gameObjects[BEE].setCentreX(50);
                gameObjects[BEE].setCentreY(150);
                // wait?
                setTimeout(function (){
                    
                    hearts--;
                    hudtext[6] = new StaticText(hearts, 452, 93, "Times Roman", 40, "red"); //hearts
                    gameObjects[LOSE_LIFE_MESSAGE].stopAndHide();
                    gameObjects[BEE].start();
                    countd = countdPRIM;
                    gameObjects[HUDTIME].clockstart();
                    for (let i=0; i<wasps.length; i++)
                    {
                        wasps[i] = new MazeWasp(waspImage);
                        wasps[i].start();
                    }
                    gameObjects[BACKGROUND].start();
                    gameObjects[HUDLEVEL].start();
                    gameObjects[HUDPOINTS].start();
                }, 2000);
                
                }
                else if (hearts<2)
                {
                    for (let i = 0; i < gameObjects.length; i++)
                    {
                        gameObjects[i].stop();
                    }
                    for (let i=0; i<wasps.length; i++)
                    {
                        wasps[i].stop();
                    }
                    if (typeof gameObjects[WIN_MESSAGE] != "undefined")
                    {
                    gameObjects[WIN_MESSAGE].stopAndHide();
                    }
                    gameObjects[BEE].setCentreX(50);
                    gameObjects[BEE].setCentreY(150);
                    hearts--;
                    hudtext[6] = new StaticText(hearts, 452, 93, "Times Roman", 40, "red");
                    gameObjects[LOSE_LIFE_MESSAGE].stopAndHide();
                    gameObjects[LOSE_MESSAGE] = new StaticText("You lost all your lifes!", 120, 280, "Times Roman", 30, "red");
                    gameObjects[LOSE_MESSAGE].start();
                    if (saveFlag == false)
                    {
                    let promptDialog = prompt("Please enter your name", "name");
                    let text;
                    if (promptDialog == null || promptDialog == "") {
                        text = "User cancelled high scores";
                    }
                    else 
                    {
                        namePlayer = promptDialog;
                        window.FirebaseSave(namePlayer, points);
                    }
                    saveFlag = true;
                    }
                    
                }
            }
        }
    }
    

    render()
    {
        super.render();
        for (let i=0; i<flowers.length; i++) //to nie powinno obejmować 57-59 ale inaczej nie dziala
        {
            flowers[i].setX(arrayX[i]+ gameObjects[BACKGROUND].getX());
            flowers[i].render();
        }
        for (let i=0; i<wasps.length; i++)
        {
            wasps[i].render();
        }
        for (let i=0; i<hudtext.length; i++)
        {
            hudtext[i].render();
        }
    }
}