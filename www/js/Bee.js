class Bee extends GameObject
{
    constructor(beeImage, centreX, centreY)
    {
        super(40);

        this.centreX = centreX;
        this.centreY = centreY;
        this.NUMBER_OF_COLUMNS_IN_SPRITE = 3;
        this.NUMBER_OF_ROWS_IN_SPRITE = 4;

        this.column = 0;
        this.animationStartDelay = 0;
        this.beeImage = beeImage;

        this.SPRITE_WIDTH = (this.beeImage.width / this.NUMBER_OF_COLUMNS_IN_SPRITE);
        this.SPRITE_HEIGHT = (this.beeImage.height / this.NUMBER_OF_ROWS_IN_SPRITE);
        this.WIDTH_OF_BEE_ON_CANVAS = 100;
        this.HEIGHT_OF_BEE_ON_CANVAS = 100;

        
        this.BEE_SPEED = 20;
        this.setDirection(STOPPED);

    }

    updateState()
    {
        if (this.direction === UP)
        {
            this.centreY -=this.BEE_SPEED;
        }
        else if (this.direction === LEFT)
        {
            this.centreX -= this.BEE_SPEED;
        }
        else if (this.direction === DOWN)
        {
            this.centreY +=this.BEE_SPEED;
        }
        else if (this.direction === RIGHT)
        {
            this.centreX += this.BEE_SPEED;
        }

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
            this.row = 3;
            this.currentgameObject = 0;
        }
    }



    render()
    {
        ctx.drawImage(this.beeImage, this.column * this.SPRITE_WIDTH, this.row * this.SPRITE_WIDTH, this.SPRITE_WIDTH, this.SPRITE_HEIGHT, this.centreX - (this.SPRITE_WIDTH / 2), this.centreY - (this.SPRITE_HEIGHT / 2), this.WIDTH_OF_BEE_ON_CANVAS, this.HEIGHT_OF_BEE_ON_CANVAS);
    }

    setDirection(newDirection)
    {
        this.direction = newDirection;
        this.startgameObject = this.direction * this.NUMBER_OF_COLUMNS_IN_SPRITE;
        this.endgameObject = this.startgameObject + this.NUMBER_OF_COLUMNS_IN_SPRITE;
        this.currentgameObject = this.startgameObject;
        this.row = this.direction;
        this.column = 0;
    }

    getDirection()
    {
        return this.direction;
    }

    setCentreX(X)
    {
        this.centreX = X;
    }

    setCentreY(Y)
    {
        this.centreY = Y;
    }

    getCentreX()
    {
        return this.centreX;
    }

    getCentreY()
    {
        return this.centreY;
    }

}