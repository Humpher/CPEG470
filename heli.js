class Heli {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.velY = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
    }

    update(){
        let idleAnim = Math.sin(theta) * 15;
        // stop heli from falling off canvas
        if(this.y > canvas.height - (this.height*2) + idleAnim){
            this.y = canvas.height - (this.height*2) + idleAnim;
            this.velY = 0;
        } else {
            this.velY += this.weight;
            this.velY *= 0.8;
            this.y += this.velY;
        }

        if(this.y < this.height + + idleAnim) {
            this.y = this.height + idleAnim;
            this.velY = 0;
        }

        if(keyPressed && this.y > this.height * 2) this.fly();
    }

    draw() {
        cntxt.fillStyle = 'red';
        cntxt.fillRect(this.x, this.y, this.width, this.height);
    }

    fly() {
        this.velY -= 2;
    }
}