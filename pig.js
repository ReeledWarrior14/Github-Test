class PIG extends BOXES{
    constructor(x, y){
        super(x, y, 40, 40);
        this.image = loadImage("sprites/enemy.png");
    }
    displayPig2(){
        fill('lime');
        super.display();
    }
}
