class CollisionBlock {
    constructor({position}){
      this.width = 32;
      this.height = 32;
      this.position = position
    }
    draw(){
      ctx.fillStyle = 'rgba(255,0,0, 0.3)'
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }

