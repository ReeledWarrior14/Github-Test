class BOXES{
    constructor(x, y, width, height){
        // angleMode(DEGREES);
        var optionsRemake4 = {
            restitution : 0.75,
            friction : 7,
            density : 1.5,
        }
        this.Bodies3 = Bodies.rectangle(x, y, width, height, optionsRemake4);
        Worlds.add(world, this.Bodies3);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/wood2.png")
    }      

    display(){
        var pos = this.Bodies3.position;
        var angle2 = this.Bodies3.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle2 * 4);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    // displayPig(){
    //     var pos = this.Bodies3.position;
    //     var angle = this.Bodies3.angle;
    //     push();
    //     translate(pos.x, pos.y);
    //     rotate(angle * 2);
    //     rectMode(CENTER);
    //     rect(0, 0, 30, 30);
    //     pop();
    // }

    displayBlock(){
        var pos = this.Bodies3.position;
        var angle = this.Bodies3.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle * 2);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}