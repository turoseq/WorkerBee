class Flower extends GameObject
{
    constructor()
    {
        super(null);
        this.flag=0;
        this.x = 30 + Math.floor(Math.random() * 940);
        this.y = 130 + Math.floor(Math.random() * 440);
        this.width = 30;
        
        this.height = 30;

        this.minimumSize = 20;

        var rand = 1 + Math.floor(Math.random() * 6);
        if (rand ==1)
        {
            this.image = flowerImage1;
            this.flag = 1;
        }
        else if (rand ==2)
        {
            this.image = flowerImage2;   
            this.flag = 2;     
        }
        else if (rand ==3)
        {
            this.image = flowerImage3;  
            this.flag = 3;      
        }
        else if (rand ==4)
        {
            this.image = flowerImage4;  
            this.flag = 4;      
        }
        else if (rand ==5)
        {
            this.image = flowerImage5;
            this.flag = 5;        
        }
        else if (rand ==6)
        {
            this.image = flowerImage6;     
            this.flag = 6;   
        }
    }

    render()
    {
        ctx.drawImage(this.image, this.x, this.y , this.width, this.height);
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

    getWidth()
    {
        return this.width;
    }

    setX(newX)
    {
        this.x = newX;
    }

    setY(newY)
    {
        this.y = newY;
    }

    setWidth(newWidth)
    {
        this.width = newWidth;
    }

    getMinimumSize()
    {
        return this.minimumSize;
    }

    getFlag()
    {
        return this.flag;
    }

    pointIsInsideBoundingRectangle(pointX, pointY)
    {
        if ((pointX > this.x) && (pointY > this.y))
        {
            if (pointX > this.x)
            {
                if ((pointX - this.x) > this.width)
                {
                    return false; // to the right of this gameObject
                }
            }

            if (pointY > this.y)
            {
                if ((pointY - this.y) > this.height)
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
    }
}

