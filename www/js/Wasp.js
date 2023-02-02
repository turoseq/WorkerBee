class Wasp extends GameObject
{
    constructor(waspImage)
    {
        super(40);

        //this.centreX = centreX;
        //this.centreY = centreY;
        do
        {
        this.centreX = 30 + Math.floor(Math.random() * 940);
        this.centreY = 130 + Math.floor(Math.random() * 440);
        } while (this.centreX < 130 || this.centreY < 230);

        this.NUMBER_OF_COLUMNS_IN_SPRITE = 2;
        this.NUMBER_OF_ROWS_IN_SPRITE = 9;

        this.column = 0;
        this.animationStartDelay = 0;
        this.waspImage = waspImage;

        this.SPRITE_WIDTH = (this.waspImage.width / this.NUMBER_OF_COLUMNS_IN_SPRITE);
        this.SPRITE_HEIGHT = (this.waspImage.height / this.NUMBER_OF_ROWS_IN_SPRITE);
        this.WIDTH_OF_WASP_ON_CANVAS = 70;
        this.HEIGHT_OF_WASP_ON_CANVAS = 70;

                
        this.WASP_SPEED = 20;
        this.setDirection(STOPPED);

    }

    updateState()
    {
        this.chaseBee();
        if (this.direction === UP)
        {
            this.centreY -=this.WASP_SPEED;
        }
        else if (this.direction === LEFT)
        {
            this.centreX -= this.WASP_SPEED;
        }
        else if (this.direction === DOWN)
        {
            this.centreY +=this.WASP_SPEED;
        }
        else if (this.direction === RIGHT)
        {
            this.centreX += this.WASP_SPEED;
        }
        else if (this.direction === UPLEFT)
        {
            this.centreY -= this.WASP_SPEED / Math.sqrt(1.7);
            this.centreX -= this.WASP_SPEED / Math.sqrt(1.7);
        }
        else if (this.direction === UPRIGHT)
        {
            this.centreY -= this.WASP_SPEED / Math.sqrt(1.7);
            this.centreX += this.WASP_SPEED / Math.sqrt(1.7);
        }
        else if (this.direction === DOWNLEFT)
        {
            this.centreY += this.WASP_SPEED / Math.sqrt(1.7);
            this.centreX -= this.WASP_SPEED / Math.sqrt(1.7);
        }
        else if (this.direction === DOWNRIGHT)
        {
            this.centreY += this.WASP_SPEED / Math.sqrt(1.7);
            this.centreX += this.WASP_SPEED / Math.sqrt(1.7);
        }
        /*else if (this.direction === STOPPED)
        {
            this.centreY = this.centreY;
            this.centreX = this.centreX;
        }*/

        if (this.direction !== STOPPED)
        {
            this.column++;
            this.currentgameObject++;
            if (this.currentgameObject >= this.endgameObject)
            {
                this.row = this.direction;
                this.column = 0;
                this.currentgameObject = this.startgameObject;
            }
            else if (this.column >= this.NUMBER_OF_COLUMNS_IN_SPRITE)
            {
                this.column = 0;
                this.row++;
            }
        }
        else // stopped
        {
            this.column = 0;
            this.row = 8;
            this.currentgameObject = 0;
        }
    }



    render()
    {
        ctx.drawImage(this.waspImage, this.column * this.SPRITE_WIDTH, this.row * this.SPRITE_WIDTH, this.SPRITE_WIDTH, this.SPRITE_HEIGHT, this.centreX - (this.SPRITE_WIDTH / 2), this.centreY - (this.SPRITE_HEIGHT / 2), this.WIDTH_OF_WASP_ON_CANVAS, this.HEIGHT_OF_WASP_ON_CANVAS);
    }

    setDirection(newDirection)
    {
        if (this.direction != newDirection)
        {
        this.direction = newDirection;
        this.startgameObject = this.direction * this.NUMBER_OF_COLUMNS_IN_SPRITE;
        this.endgameObject = this.startgameObject + this.NUMBER_OF_COLUMNS_IN_SPRITE;
        this.currentgameObject = this.startgameObject;
        this.row = this.direction;
        this.column = 0;
        }
    }

    getDirection()
    {
        return this.direction;
    }

    setCentreX(X)
    {
        this.centreX = X;
    }

    getCentreX()
    {
        return this.centreX;
    }

    getCentreY()
    {
        return this.centreY;
    }

    chaseBee()
    {
        //console.log(Math.sqrt((gameObjects[BEE].getCentreX() - this.getCentreX(0))*(gameObjects[BEE].getCentreX() - this.getCentreX(0)) + (gameObjects[BEE].getCentreY() - this.getCentreY(0))*(gameObjects[BEE].getCentreY() - this.getCentreY(0))));
        let range =  Math.sqrt((gameObjects[BEE].getCentreX() - this.getCentreX())*(gameObjects[BEE].getCentreX() - this.getCentreX()) + (gameObjects[BEE].getCentreY() - this.getCentreY())*(gameObjects[BEE].getCentreY() - this.getCentreY())); 
        let rangeY = Math.sqrt ((gameObjects[BEE].getCentreY() - this.getCentreY())*(gameObjects[BEE].getCentreY() - this.getCentreY()));  
        let rangeX = Math.sqrt ((gameObjects[BEE].getCentreX() - this.getCentreX())*(gameObjects[BEE].getCentreX() - this.getCentreX()));              
        if (range > 180)
        {
            this.setDirection(STOPPED);
        }
        else if ((this.getCentreY() > gameObjects[BEE].getCentreY()) && (this.getCentreX() > gameObjects[BEE].getCentreX()) && range<180 && rangeY > 30 && rangeX > 30)
        {
            this.setDirection(UPLEFT);
        }
        else if ((this.getCentreY() > gameObjects[BEE].getCentreY()) && (this.getCentreX() < gameObjects[BEE].getCentreX()) && range<180 && rangeY > 30 && rangeX > 30) 
        {
            this.setDirection(UPRIGHT);
        }
        else if ((this.getCentreY() < gameObjects[BEE].getCentreY()) && (this.getCentreX() > gameObjects[BEE].getCentreX()) && range<180 && rangeY > 30 && rangeX > 30)
        {
            this.setDirection(DOWNLEFT);
        }
        else if ((this.getCentreY() < gameObjects[BEE].getCentreY()) && (this.getCentreX() < gameObjects[BEE].getCentreX()) && range<180 && rangeY > 30 && rangeX > 30)
        {
            this.setDirection(DOWNRIGHT);
        }
        else if (this.getCentreX() > gameObjects[BEE].getCentreX() && range<180 && rangeY <30)
        {
            this.setDirection(LEFT);
        }
        else if (this.getCentreX() < gameObjects[BEE].getCentreX() && range<180 && rangeY<30)
        {
            this.setDirection(RIGHT);
        }
        else if (this.getCentreY() > gameObjects[BEE].getCentreY() && range<180 && rangeX<30)
        {
            this.setDirection(UP);
        }
        else if (this.getCentreY() < gameObjects[BEE].getCentreY() && range<180 && rangeX<30)
        {
            this.setDirection(DOWN);
        }  
        
        
    }

    /*pointIsInsideBoundingRectangle(pointX, pointY)
    {
        if ((pointX > this.centreX) && (pointY > this.centreY))
        {
            if (pointX > this.centreX)
            {
                if ((pointX - this.centreX) > this.WIDTH_OF_WASP_ON_CANVAS)
                {
                    return false; // to the right of this gameObject
                }
            }

            if (pointY > this.y)
            {
                if ((pointY - this.centreY) > this.HEIGHT_OF_WASP_ON_CANVAS)
                {
                    return false; // below this gameObject
                }
            }
        }
        else // above or to the left of this gameObject
        {
            return false;
        }
        return true; // inside this gameObject
    }*/

    pointIsInsideBoundingRectangle(pointX, pointY)
    {
        if (pointX > this.centreX)
        {
            if ((pointX - this.centreX) > this.WIDTH_OF_WASP_ON_CANVAS/4)
            {
                return false; // to the right of this gameObject
            }
        }
        else if (pointX < this.centreX)
        {
            if ((this.centreX - pointX) > 30)
            {
                return false; // to the right of this gameObject
            }
        }

        if (pointY > this.centreY)
        {
            if ((pointY - this.centreY) > this.HEIGHT_OF_WASP_ON_CANVAS/2)
            {
                return false; // to the right of this gameObject
            }
        }
        else if (pointY < this.centreY)
        {
            if ((this.centreY - pointY) > 30)
            {
                return false; // to the right of this gameObject
            }
        }
        else // above or to the left of this gameObject
        {
            return false;
        }
        return true; // inside this gameObject
    }

}