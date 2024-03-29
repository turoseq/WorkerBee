class Flower extends GameObject
{
    constructor(image, x, y, width)
    {
        super(null);

        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 30;

        this.minimumSize = 20;
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

