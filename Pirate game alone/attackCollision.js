function enemyAttackCollision() {
  if (
    enemy.hurtBox.position.x + enemy.hurtBox.width >=
      player.hitbox.position.x &&
    enemy.hurtBox.position.x <=
      player.hitbox.position.x + player.hitbox.width &&
    enemy.hurtBox.position.y + enemy.hurtBox.height >=
      player.hitbox.position.y &&
    enemy.hurtBox.position.y <=
      player.hitbox.position.y + player.hitbox.height &&
    enemy.isAttacking
  ) {
    attack("player");

    player.takeHit(); // Ensure the takeHit method is correctly defined and bound to enemy
    console.log("player 1 Takes damage");
  }
}

function attackCollision() {
  if (
    player.hurtBox.position.x + player.hurtBox.width >=
      enemy.hitbox.position.x &&
    player.hurtBox.position.x <= enemy.hitbox.position.x + enemy.hitbox.width &&
    player.hurtBox.position.y + player.hurtBox.height >=
      enemy.hitbox.position.y &&
    player.hurtBox.position.y <=
      enemy.hitbox.position.y + enemy.hitbox.height &&
    player.isAttacking
  ) {
   enemy.takeHit(); // Ensure the takeHit method is correctly defined and bound to player
    attack("enemy");

    console.log("player 2 takes damage");
  }
}
