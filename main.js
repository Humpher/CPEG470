


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAcaolUQc2F3MAUswr4Ip_PQQIQnM9OzIY",
    authDomain: "cpeg470-88d96.firebaseapp.com",
    databaseURL: "https://cpeg470-88d96.firebaseio.com",
    projectId: "cpeg470-88d96",
    storageBucket: "cpeg470-88d96.appspot.com",
    messagingSenderId: "550456122530",
    appId: "1:550456122530:web:feb027b2cd9815814f4bfb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

const canvas = document.getElementById('canvasOne');
const cntxt = canvas.getContext('2d');

const heli = new Heli();

canvas.width = 600;
canvas.height = 400;

let controlKey = 'Space';
let keyPressed = false;
let theta = 0;
let hue = 0;
let currentFrame = 0;
let gameSpeed = 2;
let score = 0;
let highscore = 0;





function animate() {
    cntxt.clearRect(0, 0, canvas.width, canvas.height);

    generateTerrain();

    

    heli.update();
    heli.draw();

    generateSmoke();
    drawScore();
    
    if(collisionDetected()) {return;}
    requestAnimationFrame(animate);

    theta += 0.11; // for idle animation in heli.js
    hue++;          // for changing colors of smoke in smoke.js
    currentFrame++  // keep track of current frame so we can spawn periodically
    if(gameSpeed < 3){
        gameSpeed += 0.001;
    }
}

function NameInput(){
   
    let userName = document.getElementById("the-user").value;
    console.log(userName);
    
};
 
//NameInput();
animate();

window.addEventListener('keydown', function(e) {
    if(e.code === controlKey)
        keyPressed = true;
});

window.addEventListener('keyup', function(e) {
    if(e.code === controlKey)
        keyPressed = false;
});

function collisionDetected() {
    for(let i = 0; i < terrainArr.length; i++) {
        if(heli.x < terrainArr[i].x + terrainArr[i].width &&
            heli.x + heli.width > terrainArr[i].x &&
            ((heli.y < 0 + terrainArr[i].topHeight && heli.y + heli.height > 0) ||
            (heli.y > canvas.height - terrainArr[i].bottomHeight &&
                heli.y + heli.height < canvas.height))) {
                    gameOver();
                    return true;    // collision detected
                }
    }
}

function drawScore(){
    cntxt.fillStyle = 'red';
    cntxt.font = '30px Verdana'
    cntxt.fillText(score, canvas.width - 70, 30);
}

function gameOver() {
    cntxt.font = '50px Verdana'
    cntxt.fillText("GAME OVER", canvas.width/2 - 140, canvas.height/2 + 20);

    // SEND HIGHSCORE TO DATABASE HERE AND MAYBE INCLUDE USERNAMES?

    // POP UP SOME WINDOW WITH A LEADERBOARD OF ALL HIGHSCORES
}



