const smokeArr = [];

class Smoke {
    constructor() {
        this.x = heli.x;
        this.y = heli.y;
        this.size = Math.random() * 5 + 1;
        this.speedY = (Math.random() *1) - 0.5;
        // this.color = 'hsla(' + hue + ',100%, 50%, 0.2)';
        this.color = 'grey';

    }

    update() {
        this.x -= gameSpeed;
        this.y += this.speedY;
    }

    draw() {
        cntxt.fillStyle = this.color;
        cntxt.beginPath();
        cntxt.arc(this.x, this.y, this.size, 0, Math.PI*2);
        cntxt.fill();
    }
}

function generateSmoke() {
    smokeArr.unshift(new Smoke);
    for(let i = 0; i < smokeArr.length; i++){
        smokeArr[i].update();
        smokeArr[i].draw();
    }

    // remove old smoke
    if (smokeArr.length > 100){
        for(let i = 0; i < 10; i++) {
            smokeArr.pop(smokeArr[i]);
        }
    }
}