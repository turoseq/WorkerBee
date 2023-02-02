class MazeWasp extends Wasp
{
    constructor(waspImage, centreX, centreY)
    {
        super(waspImage, centreX, centreY); /* as this class extends from GameObject, you must always call super() */
        

        /* These variables depend on the object */
        this.WIDTH_OF_WASP_ON_CANVAS = 100; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_WASP_ON_CANVAS = 100;

        //this.centreX = centreX; /* set the start position of the skeleton in the maze */
        //this.centreY = centreY;

        this.WASP_SPEED = 2; /* set the skeleton's speed */
    }
}