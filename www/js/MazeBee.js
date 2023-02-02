class MazeBee extends Bee
{
    constructor(beeImage, centreX, centreY)
    {
        super(beeImage, centreX, centreY); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.WIDTH_OF_BEE_ON_CANVAS = 50; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_BEE_ON_CANVAS = 50;

        this.centreX = centreX; /* set the start position of the skeleton in the maze */
        this.centreY = centreY;

        this.BEE_SPEED = 4; /* set the skeleton's speed */
    }
}