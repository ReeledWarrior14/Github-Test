class ROOF extends BOXES{
    constructor(x, y, width, height, angle){
        super(x, y , width, height, angle);
        Matter.Body.setAngle(this.Bodies3, angle);
    }
}