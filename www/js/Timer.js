class Timer extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(countd, x, y, font, fontSize, colour)
    {
        super(null); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.countd = countd;
        this.x = x;
        this.y = y;
        this.font = font;
        this.fontSize = fontSize;
        this.colour = colour;
        this.interval = 0;

        this.minutes = Math.floor(this.countd / 60);
        this.seconds = Math.floor(this.countd % 60);

        if (this.seconds<10)
        {
            this.secondstext = this.seconds + "0";
        }
        else
        {
            this.secondstext = this.seconds;
        }

        ctx.font = this.fontSize + "px " + this.font;
        this.width = ctx.measureText(this.text).width;
        if (this.x === STATIC_TEXT_CENTRE)
        {
            this.x = (canvas.width - this.width) / 2;
        }
        //this.clockstart();
    }

    render()
    {
        ctx.fillStyle = this.colour;
        ctx.font = this.fontSize + "px " + this.font; // need to set the font each time, as it might have been changed by other gameObjects.
        this.minutes = Math.floor(countd / 60);
        this.seconds = Math.floor(countd % 60);

        if (this.seconds<10)
        {
            this.secondstext = "0" + this.seconds;
        }
        else
        {
            this.secondstext = this.seconds;
        }
        
        ctx.fillText(this.minutes + ":" + this.secondstext, this.x, this.y);

    }

    clockstart()
    {
        this.interval = setInterval(function (){
            countd--;

        }, 1000);
    }

    clockstop()
    {
        clearInterval(this.interval);
    }

    clockreset()
    {
        clockd = 240;
        this.minutes = Math.floor(countd / 60);
        this.seconds = Math.floor(countd % 60);

        if (this.seconds<10)
        {
            this.secondstext = "0" + this.seconds;
        }
        else
        {
            this.secondstext = this.seconds;
        }
        
        ctx.fillText(this.minutes + ":" + this.secondstext, this.x, this.y);
    }

}