const terrainArr = [];

class Terrain {
    constructor() {
        this.x = canvas.width;
        this.width = 20;
        this.topHeight = (Math.random() * canvas.height/4) + 30;
        this.bottomHeight = (Math.random() * canvas.height/4) + 30;
        this.color = 'hsla(' + hue + ', 100%, 50%, .9)';
        // this.color = 'black';
        this.passed = false;

    }

    draw() {
        cntxt.fillStyle = this.color;
        cntxt.fillRect(this.x, 0, this.width, this.topHeight);
        cntxt.fillRect(this.x, canvas.height - this.bottomHeight, this.width, this.bottomHeight);

    }

    update() {
        this.x -= gameSpeed;
        if(this.x < heli.x && !this.passed) {
            score++;
            this.passed = true;
        }
        firebase.database().ref("Humphrey").set(score)
        firebase.database().ref("Humphrey").on("value", function (snapshot) {
            let highScore = snapshot.val();
            console.log(highScore);
          });
        this.draw();
    }
}

function generateTerrain() {
    if(currentFrame % 20 === 0) {
        terrainArr.unshift(new Terrain);
    }

    // maintain lenght of 15 for the terrain arr
    if(terrainArr.length > 15)
        terrainArr.pop(terrainArr[0])

    for(let i = 0; i < terrainArr.length; i++) {
        terrainArr[i].update();
    }
}

