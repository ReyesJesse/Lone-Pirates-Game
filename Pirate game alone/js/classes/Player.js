class Player extends Sprite {
  constructor({
    collisionBlocks = [],
    imageSrc,
    frameRate,
    frameBuffer,
    animations,
    color = "red",
  }) {
    super({ imageSrc, frameRate, frameBuffer, animations });
    this.position = {
      x: 500,
      y: 100,
    };
    this.knockbackDistance = 0; // Adjust this value as needed

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.health = 100;
    this.color = color;

    this.enemyHealth = 100;

    this.gravity = 1;
    this.collisionBlocks = collisionBlocks;

    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.frameRate = frameRate;
    this.frameBuffer = frameBuffer;
    this.animations = animations;
    this.isAttacking;
    this.currentAnimation = "idleRight"; // Default animation
  }

  movement() {
    // Reset horizontal velocity
    this.velocity.x = 0;

    // Handle movement and idle animations
    if (keys.d.pressed) {
      this.velocity.x = 7;
      this.lastDirection = "right";
      if (!this.isAttacking) {
        this.switchSprite("runRight");
      }
    } else if (keys.a.pressed) {
      this.velocity.x = -7;
      this.lastDirection = "left";
      if (!this.isAttacking) {
        this.switchSprite("runLeft");
      }
    } else {
      if (this.lastDirection === "left") {
        if (!this.isAttacking) {
          this.switchSprite("idleLeft");
        }
      } else {
        if (!this.isAttacking) {
          this.switchSprite("idleRight");
        }
      }
    }

    // Handle jump and fall animations, prioritizing attack animations
    if (this.isAttacking) {
      if (this.velocity.y < 0) {
        // Jumping and attacking
        if (this.lastDirection === "right") {
          this.switchSprite("jumpAttackRight");
        } else {
          this.switchSprite("jumpAttackLeft");
        }
      } else if (this.velocity.y > 0) {
        // Falling and attacking
        if (this.lastDirection === "right") {
          this.switchSprite("jumpAttackRight");
        } else {
          this.switchSprite("jumpAttackLeft");
        }
      }
    } else {
      // Regular jump and fall animations
      if (this.velocity.y < 0) {
        if (this.lastDirection === "right") {
          this.switchSprite("jumpRight");
        } else {
          this.switchSprite("jumpLeft");
        }
      } else if (this.velocity.y > 0) {
        if (this.lastDirection === "right") {
          this.switchSprite("jumpFallRight");
        } else {
          this.switchSprite("jumpFallLeft");
        }
      }
    }

    // Handle attack animations when not jumping or falling
    if (this.isAttacking && this.velocity.y === 0) {
      if (this.lastDirection === "right") {
        this.switchSprite("attackRight");
      } else {
        this.switchSprite("attackLeft");
      }
    }
  }


enemyMovement() {
    // Reset horizontal velocity

    this.velocity.x = 0;

    // Handle movement and idle animations
    if (keys.l.pressed) {
        this.velocity.x = 7;
        this.lastDirection = "right";
        if (!this.isAttacking) {
            this.switchSprite("runRight");
        }
    } else if (keys.j.pressed) {
        this.velocity.x = -7;
        this.lastDirection = "left";
        if (!this.isAttacking) {
            this.switchSprite("runLeft");
        }
    } else {
        if (this.lastDirection === "left") {
            if (!this.isAttacking) {
                this.switchSprite("idleLeft");
            }
        } else {
            if (!this.isAttacking) {
                this.switchSprite("idleRight");
            }
        }
    }

    // Handle jump and fall animations, prioritizing attack animations
    if (this.isAttacking) {
        if (this.velocity.y < 0) {
            // Jumping and attacking
            if (this.lastDirection === "right") {
                this.switchSprite("jumpAttackRight");
            } else {
                this.switchSprite("jumpAttackLeft");
            }
        } else if (this.velocity.y > 0) {
            // Falling and attacking
            if (this.lastDirection === "right") {
                this.switchSprite("jumpAttackRight");
            } else {
                this.switchSprite("jumpAttackLeft");
            }
        }
    } else {
        // Regular jump and fall animations
        if (this.velocity.y < 0) {
            if (this.lastDirection === "right") {
                this.switchSprite("jumpRight");
            } else {
                this.switchSprite("jumpLeft");
            }
        } else if (this.velocity.y > 0) {
            if (this.lastDirection === "right") {
                this.switchSprite("jumpFallRight");
            } else {
                this.switchSprite("jumpFallLeft");
            }
        }
    }

    // Handle attack animations when not jumping or falling
    if (this.isAttacking && this.velocity.y === 0) {
        if (this.lastDirection === "right") {
            this.switchSprite("attackRight");
        } else {
            this.switchSprite("attackLeft");
        }
    }
}

  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 50,
        y: this.position.y + 16,
      },
      width: 50,
      height: 60,
    };
    //  // Draw the hurtbox
    // update hurtbox on each character
    ctx.fillStyle = 'rgba(255,0,0,0.3)'
    ctx.fillRect(
      this.hitbox.position.x,
      this.hitbox.position.y,
      this.hitbox.width,
      this.hitbox.height
    );
  }

  updateHurtbox() {
    // if (this.isAttacking) {
    //   // Draw the hurtbox
    //   ctx.fillStyle = "rgba(0,255,0, 0.3)";
    //   ctx.fillRect(
    //     this.hurtBox.position.x,
    //     this.hurtBox.position.y,
    //     this.hurtBox.width,
    //     this.hurtBox.height
    //   );
    // }
    this.hurtBox = {
      position: {
        x: this.position.x + 100,
        y: this.position.y + 55,
      },
      width: 35,
      height: 10,
    };

    if (this.lastDirection === "left") {
      this.hurtBox = {
        position: {
          x: this.position.x + 13,
          y: this.position.y + 55,
        },
        width: 37,
        height: 10,
      };
    }
    //debug attackBox
    // ctx.fillStyle = "rgba(0,255,0, 0.3)";
    // ctx.fillRect(
    //   this.hurtBox.position.x,
    //   this.hurtBox.position.y,
    //   this.hurtBox.width,
    //   this.hurtBox.height
    // );
  }
  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 200);

    if (this.isDead) {
      // Do not update animations or player state if the player is dead
      return;
    }
  }

  takeHit() {
    // Apply knockback effect based on the attacker's direction
    if (player.position.x > enemy.position.x) {
      player.position.x += this.knockbackDistance; // Knockback to the right
      console.log("Player is to the right, knockback to the right");
    } else {
      player.position.x -= this.knockbackDistance; // Knockback to the left
      console.log("Player is to the left, knockback to the left");
    }

    if (enemy.position.x > player.position.x) {
      enemy.position.x += this.knockbackDistance; // Knockback to the right
      console.log("Enemy is to the right, knockback to the right");
    } else {
      enemy.position.x -= this.knockbackDistance; // Knockback to the left
      console.log("Enemy is to the left, knockback to the left");
    }

    // Switch to the correct hurt animation based on lastDirection
    if (this.lastDirection === "left") {
      this.switchSprite("hurtLeft");
    } else {
      this.switchSprite("hurtRight");
    }

    // Switch to the correct attack animation
    this.switchSprite("attackLeft");
  }

  die() {
    // Handle player death
    console.log("Player has died");
    this.switchSprite("death");

    // Optionally, you might want to stop further updates or actions
    // For example, you could set a flag to prevent further updates:
    this.isDead = true; // Add a flag to indicate death status
  }

  update() {
// Set timeout to hide symbols after 5 seconds
    // Switch to another animation or handle other logic
    // this is the blue box
    // ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

    this.position.x += this.velocity.x;

    this.updateHitbox();

    this.checkForHorizontalCollisions();
    this.applyGravity();

    this.updateHitbox();

    // ctx.fillRect(
    //   this.hitbox.position.x,
    //   this.hitbox.position.y,
    //   this.hitbox.width,
    //   this.hitbox.height
    // );

    if (this.isDead) {
      // Do not update animations or player state if the player is dead
      return;
 

  // Draw game objects
   
    }

    this.checkForVerticalCollisions();
    
  }

  switchSprite(name) {
    // Check if the current animation is a hurt animation and ensure it's done before switching
    if (
      (this.currentAnimation === this.animations["hurtRight"] ||
        this.currentAnimation === this.animations["hurtLeft"]) &&
      this.currentFrame < this.currentAnimation.frameRate - 1
    ) {
      return;
    }

    // Check if the image is already set to the current animation's image
    if (this.image === this.animations[name]?.image) {
      return;
    }

    // Update the sprite properties
    this.currentFrame = 0;
    this.image = this.animations[name]?.image;
    this.frameRate = this.animations[name]?.frameRate;
    this.frameBuffer = this.animations[name]?.frameBuffer;
    this.loop = this.animations[name]?.loop;
    this.currentAnimation = this.animations[name];
  }

  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      // if a collision exists
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on x axis going to the left
        if (this.velocity.x < -0) {
          const offset = this.hitbox.position.x - this.position.x;
          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01;
          break;
        }

        if (this.velocity.x > 0) {
          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width;
          this.position.x = collisionBlock.position.x - offset - 0.01;
          break;
        }
      }
    }
  }

  applyGravity() {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      // if a collision exists
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          const offset = this.hitbox.position.y - this.position.y;
          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01;
          break;
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = collisionBlock.position.y - offset - 0.01;
          break;
        }
      }
    }
  }
}
function handlePlayerDamage(damage) {
  player.health -= damage;

  if (player.health < 0) {
    player.health = 0;
  }

  const playerHealthBar = document.querySelector("#playerHealth");
  if (playerHealthBar) {
    playerHealthBar.style.width = `${player.health}%`;
  } else {
    console.error("Player health bar element not found");
  }

  if (player.health <= 0) {
    player.die(); // Handle player death
  }
}

function handleEnemyDamage(damage) {
  enemy.health -= damage;

  if (enemy.health < 0) {
    enemy.health = 0;
  }

  const enemyHealthBar = document.querySelector("#enemyHealth");
  if (enemyHealthBar) {
    // Update the width based on the remaining health
    enemyHealthBar.style.width = `${enemy.health}%`;
  } else {
    console.error("Enemy health bar element not found");
  }

  if (enemy.health <= 0) {
    enemy.die(); // Handle enemy death
  }
}


function attack(target) {
  const damage = 2.5; // Define your damage value

  if (target === "player") {
    handlePlayerDamage(damage);
  } else if (target === "enemy") {
    handleEnemyDamage(damage);
  }
}
