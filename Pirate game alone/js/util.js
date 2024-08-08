Array.prototype.parse2D = function (data){
    const rows = [];
    for (let i = 0; i < this.length; i += 32){
      rows.push(this.slice(i, i + 32))
    }
    return rows
  }
  
Array.prototype.createObjectFrom2D = function(){
    const objects = [];
    this.forEach((rows,y) =>{
        rows.forEach((symbol, x) =>{
          if(symbol === 1){
            objects.push(new CollisionBlock({position:{
              x: x * 32,
              y: y * 32
            }}))
          }
        })
      })
      
return objects
}  