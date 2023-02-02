class MovingBg extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image)
    {
        let updateStateMilliseconds = 10;
        super(updateStateMilliseconds); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;

        this.x = 0;
    }

        

    updateState()
    {     
        var bee = gameObjects[BEE];
        //this.beeX = bee.getCentreX();
        if (gameObjects[BEE].getCentreX()*3 > canvas.width*2 && gameObjects[BEE].getDirection() === RIGHT)
        {
            this.x--;
            if (this.x <= -canvas.width)
            {
                //this.x = 0;
                this.x++;
            }
            else
            {
                gameObjects[BEE].setCentreX(gameObjects[BEE].getCentreX()-0.8);
                for (let i = 0 ; i<wasps.length; i++)
                {
                    wasps[i].setCentreX(wasps[i].getCentreX()-1);
                }
            }
        }
        else if(gameObjects[BEE].getCentreX() < canvas.width/3 && gameObjects[BEE].getDirection() ===LEFT)
        {
            //
            this.x++;
            if (this.x >= 0)
            {
                this.x--;
            }
            else
            {
                gameObjects[BEE].setCentreX(gameObjects[BEE].getCentreX()+0.8);
                for (let i = 0 ; i<wasps.length; i++)
                {
                    wasps[i].setCentreX(wasps[i].getCentreX()+1);
                }               
            }
        }
    }

    render()
    {
        ctx.drawImage(this.image, this.x, 100, canvas.width+500, canvas.height-100);
        //ctx.drawImage(this.image, this.x + canvas.width, 0, canvas.width+500, canvas.height);
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }
}