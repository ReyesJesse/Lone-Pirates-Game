class ResourceLoader {
    constructor(resources) {
      this.resources = resources;
      this.loadedResources = 0;
      this.totalResources = resources.length;
    }
  
    loadResources(callback) {
      this.resources.forEach(resource => {
        const img = new Image();
        img.src = resource;
        img.onload = () => {
          this.loadedResources++;
          if (this.loadedResources === this.totalResources) {
            callback();
          }
        };
      });
    }
  }

const resources = [
    'playerOne/attack/attack1Left.png',
    'playerOne/attack/attack1Right.png',
    'playerOne/idle/idleAnimation.png',
    'playerOne/idle/idleAnimationLeft.png',
    'playerOne/jump/jumpFallLeft.png',
    'playerOne/jump/jumpFallRight.png',
    'playerOne/jump/jumpGround.png',
    'playerOne/jump/jumpLeft.png',
    'playerOne/jump/jumpRight.png',
    'playerOne/jumpAttack/jumpAttackLeft.png',
    'playerOne/jumpAttack/jumpAttackRight.png',
    'playerOne/runAnimations/runLeft.png',
    'playerOne/runAnimations/runRight.png',
    'playerOne/runAnimations/runRight.png',
    '/playerOne/hurtAnimation.png',
    '/playerOne/hurtAnimationLeft.png',
  


    // Add all other resources needed for the game
  ];
  