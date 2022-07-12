var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var gameOver, gameOverImg
var restart, restartImg
var score = 0 
var PLAY = 1
var END = 0
var gameState = PLAY

function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
gameOverImg = loadImage("assets/gameOver.png")
obstacleB1 = loadImage("assets/obsBottom1.png")
obstacleB2 = loadImage("assets/obsBottom2.png")
obstacleB3 = loadImage("assets/obsBottom3.png")
obstacleT1 = loadImage("assets/obsTop1.png")
obstacleT2 = loadImage("assets/obsTop2.png")
restartImg = loadImage("assets/restart.png")
dieSound = loadSound("assets/die.mp3")
jumpSound = loadSound("assets/jump.mp3")
}

function setup(){
    bg = createSprite(165, 485, 1, 1)
    bg.addImage(bgImg)
    bg.scale = 1.3

    groundB = createSprite(200, 390, 800, 20)
    groundB.visible = false
    groundT = createSprite(200, 10, 800, 20)
    groundT.visible = false

    balloon = createSprite(100, 200, 20, 50)
    balloon.addAnimation("balloon", balloonImg)
    balloon.scale = 0.2
    balloon.debug = true

    //intializing groups
    obstaclesTGroup = new Group()
    obstaclesBGroup = new Group()
    barGroup = new Group()

    gameOver = createSprite(200, 200)
    gameOver.addImage(gameOverImg)
    gameOver.scale = 0.6
    gameOver.visible = false

    restart = createSprite(200, 250)
    restart.addImage(restartImg)
    restart.scale = 0.7
    restart.visible = false

}


function draw() {
    if (gameState === PLAY) {
        if (keyDown("SPACE")) {
            balloon.velocityY = -6
        }
        balloon.velocityY = balloon.velocityY + 0.5
        spawnObstaclesTop()
        spawnObstaclesBottom()
    }
 
 drawSprites() 

}

function spawnObstaclesTop() {
    if (frameCount % 90 === 0) {

        obstacleTop = createSprite(400, 50, 40, 50)
        obstacleTop.scale = 0.1
        obstacleTop.velocityX = -4
        //random Y positions for top obstacles
        obstacleTop.y = Math.round(random(10,100))
        var rand = Math.round(random(1, 2))
        switch(rand) {
            case 1: obstacleTop.addImage(obstacleT1)
            break
            case 2: obstacleTop.addImage(obstacleT2)
            break
            default: break;
        }
        obstacleTop.lifetime = 100
        balloon.depth = balloon.depth + 1
        obstaclesTGroup.add(obstacleTop)

    }
}

    function spawnObstaclesBottom() {
        if (frameCount % 60 === 0) {
    
            obstacleBottom = createSprite(400, 350, 40, 50)
            obstacleBottom.scale = 0.1
            obstacleBottom.velocityX = -4
            //random Y positions for top obstacles
            //obstacleBottom.y = Math.round(random(10,100))
            var rand = Math.round(random(1, 3))
            switch(rand) {
                case 1: obstacleBottom.addImage(obstacleB1)
                break
                case 2: obstacleBottom.addImage(obstacleB2)
                break
                case 3: obstacleBottom.addImage(obstacleB3)
                default: break;
            }
            obstacleBottom.lifetime = 100
            balloon.depth = balloon.depth + 1
            obstaclesBGroup.add(obstacleBottom)
    
        }
    }
     


    