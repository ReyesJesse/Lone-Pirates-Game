const keys = {
  //Player 1
  w: { pressed: false },
  a: { pressed: false },
  s: { pressed: false },
  d: { pressed: false },
  //player2
  j: { pressed: false },
  l: { pressed: false },
  i: { pressed: false },
  p: { pressed: false },

  space: { pressed: false },
};
let canPlayerAttack = true;
let canEnemyAttack = true;
const playerAttackCooldown = 500; // 1 second
const enemyAttackCooldown = 500; // 1 second

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      if (player.velocity.y === 0) player.velocity.y = -17;
      break;
    case "i":
      keys.i.pressed = true;
      if (enemy.velocity.y === 0) enemy.velocity.y = -17;
      break;
    case "a":
      keys.a.pressed = true;
      break;

    case "d":
      keys.d.pressed = true;
      break;
    case "j":
      keys.j.pressed = true;
      break;
    case "l":
      keys.l.pressed = true;
      break;
      case "p":
        if (canEnemyAttack) {
          canEnemyAttack = false;
          keys.p.pressed = true;
          enemy.attack();
          setTimeout(() => {
            canEnemyAttack = true;
          }, enemyAttackCooldown);
        }
        break;
      case " ":
        if (canPlayerAttack) {
          canPlayerAttack = false;
          keys.space.pressed = true;
          player.attack();
          setTimeout(() => {
            canPlayerAttack = true;
          }, playerAttackCooldown);
        }
        break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
      
   
    case "j":
      keys.j.pressed = false;
      break;
    case "l":
      keys.l.pressed = false;
      break;
      case "i":
        keys.i.pressed = false;
        break;
      case " ":
        keys.space.pressed = false;
        break;
  }
});
