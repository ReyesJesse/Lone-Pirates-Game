const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 64 * 16;
canvas.height = 640;

const parseCollision = collisionsLevel1.parse2D();

const CollisionBlocks = parseCollision.createObjectFrom2D();

const player = new Player({
  color: "red",
  imageSrc: "/playerOne/idle/idleAnimation.png",

  collisionBlocks: CollisionBlocks,

  frameRate: 5,
  frameBuffer: 6,
  animations: {
    idleRight: {
      frameRate: 5,
      frameBuffer: 6,
      loop: true,
      imageSrc: "/playerOne/idle/idleAnimation.png",
    },
    idleLeft: {
      frameRate: 5,
      frameBuffer: 6,
      loop: true,
      imageSrc: "/playerOne/idle/idleAnimationLeft.png",
    },
    runRight: {
      frameRate: 6,
      frameBuffer: 4,
      loop: true,
      imageSrc: "/playerOne/runAnimations/runRight.png",
    },
    runLeft: {
      frameRate: 6,
      frameBuffer: 4,
      loop: true,
      imageSrc: "/playerOne/runAnimations/runLeft.png",
    },
    jumpLeft: {
      frameRate: 3,
      frameBuffer: 2,
      loop: true,
      imageSrc: "/playerOne/jump/jumpLeft.png",
    },
    jumpRight: {
      frameRate: 3,
      frameBuffer: 2,
      loop: true,
      imageSrc: "/playerOne/jump/jumpRight.png",
    },
    jumpFallRight: {
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: "/playerOne/jump/jumpFallRight.png",
    },
    jumpFallLeft: {
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: "/playerOne/jump/jumpFallLeft.png",
    },
    attackRight: {
      frameRate: 3,
      frameBuffer: 5,
      loop: true,
      imageSrc: "/playerOne/attack/attack1Right.png",
    },
    attackLeft: {
      frameRate: 3,
      frameBuffer: 5,
      loop: true,
      imageSrc: "/playerOne/attack/attack1Left.png", // Ensure this path is correct and the image exists
    },
    jumpAttackRight: {
      frameRate: 3,
      frameBuffer: 3,
      loop: true,
      imageSrc: "/playerOne/jumpAttack/jumpAttackRight.png", // Ensure this path is correct and the image exists
    },
    jumpAttackLeft: {
      frameRate: 3,
      frameBuffer: 3,
      loop: true,
      imageSrc: "/playerOne/jumpAttack/jumpAttackLeft.png", // Ensure this path is correct and the image exists
    },
    hurtRight: {
      frameRate: 3,
      frameBuffer: 3,
      loop: false,
      imageSrc: "/playerOne/hurtAnimation.png", // Ensure this path is correct and the image exists
    },
    hurtLeft: {
      frameRate: 5,
      frameBuffer: 1,
      loop: false,
      imageSrc: "/playerOne/hurtAnimationLeft.png", // Ensure this path is correct and the image exists
    },
    
  },
});


const enemy = new Player({
  color: "red",
  imageSrc: "/playerTwo/idle/idleAnimation.png",

  collisionBlocks: CollisionBlocks,

  frameRate: 5,
  frameBuffer: 6,
  animations: {
    idleRight: {
      frameRate: 5,
      frameBuffer: 6,
      loop: true,
      imageSrc: "/playerTwo/idle/idleAnimation.png",
    },
    idleLeft: {
      frameRate: 5,
      frameBuffer: 6,
      loop: true,
      imageSrc: "/playerTwo/idle/idleAnimationLeft.png",
    },
    runRight: {
      frameRate: 6,
      frameBuffer: 4,
      loop: true,
      imageSrc: "/playerTwo/runAnimations/runRight.png",
    },
    runLeft: {
      frameRate: 6,
      frameBuffer: 4,
      loop: true,
      imageSrc: "/playerTwo/runAnimations/runLeft.png",
    },
    jumpLeft: {
      frameRate: 3,
      frameBuffer: 2,
      loop: true,
      imageSrc: "/playerTwo/jump/jumpLeft.png",
    },
    jumpRight: {
      frameRate: 3,
      frameBuffer: 2,
      loop: true,
      imageSrc: "/playerTwo/jump/jumpRight.png",
    },
    jumpFallRight: {
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: "/playerTwo/jump/jumpFallRight.png",
    },
    jumpFallLeft: {
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: "/playerTwo/jump/jumpFallLeft.png",
    },
    attackRight: {
      frameRate: 3,
      frameBuffer: 5,
      loop: true,
      imageSrc: "/playerTwo/attack/attack1Right.png",
    },
    attackLeft: {
      frameRate: 3,
      frameBuffer: 5,
      loop: true,
      imageSrc: "/playerTwo/attack/attack1Left.png", // Ensure this path is correct and the image exists
    },
    jumpAttackRight: {
      frameRate: 3,
      frameBuffer: 3,
      loop: true,
      imageSrc: "/playerTwo/jumpAttack/jumpAttackRight.png", // Ensure this path is correct and the image exists
    },
    jumpAttackLeft: {
      frameRate: 3,
      frameBuffer: 3,
      loop: true,
      imageSrc: "/playerTwo/jumpAttack/jumpAttackLeft.png", // Ensure this path is correct and the image exists
    },
    hurtRight: {
      frameRate: 3,
      frameBuffer: 3,
      loop: false,
      imageSrc: "/playerTwo/hurtAnimation.png", // Ensure this path is correct and the image exists
    },
    hurtLeft: {
      frameRate: 5,
      frameBuffer: 1,
      loop: false,
      imageSrc: "/playerTwo/hurtAnimationLeft.png", // Ensure this path is correct and the image exists
    },
    
  },
});
enemy.lastDirection = 'left'

// const p2Symbol = new p1({});

// Set initial positions
player.position = { x: 100, y: 200 };

enemy.position = { x: 760, y: 100 };
// Initialize symbols
const p1Symbol = new Sprite({
  position: {
    x: player.position.x + 97,
    y: player.position.y - 25,
  },
  visible: true,
  imageSrc: "/playerSymbol/1.png",
});

const p1Symbolp = new Sprite({
  position: {
    x: player.position.x + 80,
    y: player.position.y - 25,
  },
  visible: true,
  imageSrc: "/playerSymbol/p.png",
});

const p2Symbol = new Sprite({
  position: {
    x: enemy.position.x + 97,
    y: enemy.position.y - 25,
  },
  visible: true,
  imageSrc: "/playerSymbol/2.png",
});

const p2Symbolp = new Sprite({
  position: {
    x: enemy.position.x + 80,
    y: enemy.position.y - 25,
  },
  visible: true,
  imageSrc: "/playerSymbol/p.png",
});

// Function to hide the symbols
function hideSymbols() {
  p1Symbol.visible = false;
  p1Symbolp.visible = false;
  p2Symbol.visible = false;
  p2Symbolp.visible = false;
}

// Update function
function playerUpdate() {
  p1Symbol.position.x = player.position.x + 97;
  p1Symbol.position.y = player.position.y - 25;
  p1Symbolp.position.x = player.position.x + 80;
  p1Symbolp.position.y = player.position.y - 25;

  p2Symbol.position.x = enemy.position.x + 97;
  p2Symbol.position.y = enemy.position.y - 25;
  p2Symbolp.position.x = enemy.position.x + 80;
  p2Symbolp.position.y = enemy.position.y - 25;
}

// Set timeout to hide symbols after 5 seconds
setTimeout(hideSymbols, 5000);

const resourceLoader = new ResourceLoader(resources);


let lastTime = 0;
const fps = 60;
const interval = 1000 / fps;

function gameloop(timestamp) {
  const elapsedTime = timestamp - lastTime;

  if (elapsedTime > interval) {
    lastTime = timestamp - (elapsedTime % interval);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background elements
    bg.draw();
    cloudBig.update();
    cloudBig2.update();
    backgroundLevel1.draw();
    water.draw();
    waterSmall.draw();
    waterSmallTwo.draw();
    palmTree.draw();
    palmTree2.draw();
    palmTreeSide.draw();
    palmTreeSide2.draw();

    // Draw the p1Symbol
    playerUpdate();
    p1Symbol.draw();
    p1Symbolp.draw();
    p2Symbol.draw();
    p2Symbolp.draw();

    enemy.enemyMovement();
    player.movement();

    // Update hurtboxes
    player.updateHurtbox();
    enemy.updateHurtbox();

    // Draw game objects
    player.update();
    player.draw();
    enemy.update();
    enemy.draw();

    // Check collisions
    attackCollision();
    enemyAttackCollision();
  }

  // Request the next frame
  window.requestAnimationFrame(gameloop);
}

// Start the resource loading process
resourceLoader.loadResources(() => {
  // Start the game loop once all resources are loaded
  window.requestAnimationFrame(gameloop);
});
