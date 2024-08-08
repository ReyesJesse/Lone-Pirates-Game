class Sprite {
  constructor({ position, imageSrc, frameRate = 1, animations, frameBuffer, visible = true }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;

    this.loaded = false;
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
    };
    

    this.frameRate = frameRate;
    this.currentFrame = 0;
    this.frameBuffer = frameBuffer;
    this.elapsedFrame = 0;
    this.animations = animations;
    this.visible = visible; // Add visibility property

    if (this.animations) {
      for (let key in this.animations) {
        const image = new Image();
        image.src = this.animations[key].imageSrc;
        this.animations[key].image = image;
      }
    }
  }

  draw() {
    if (!this.loaded || !this.visible) return; // Check for loaded and visible

    const cropBox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };

    ctx.drawImage(
      this.image,
      cropBox.position.x,
      cropBox.position.y,
      cropBox.width,
      cropBox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    this.updateFrames();
  }

  updateFrames() {
    // Update the current frame based on elapsed time
    this.elapsedFrame++;
    if (this.elapsedFrame >= this.frameBuffer) {
      this.currentFrame = (this.currentFrame + 1) % this.frameRate;
      this.elapsedFrame = 0;
    }
  }

  update() {
    this.position.x -= .1; // Move the cloud to the left
    if (this.position.x + this.width < 1200) {
      this.position.x = 0; // Reset to the right edge
    }
    this.draw();
  }

  updateFrames() {
    this.elapsedFrame++;
    if (this.elapsedFrame % this.frameBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) this.currentFrame++;
      else this.currentFrame = 0;
    }
  }
}


const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "mapNew.png",
});
const bg = new Sprite({
  position: {
    x: 0,
    y: 70,
  },
  imageSrc: "bg.png",
});

// const clouds = new Sprite({
//   position: { x:0, y: 50 },
//   imageSrc: "clouds.png",
//   frameRate: 2, // Increase the frame rate for smoother animation
//   frameBuffer: 75, // Adjust frame buffer for desired speed
//   loop: true,

// });
// const clouds2 = new Sprite({
//   position: { x: 700, y: 50 },
//   imageSrc: "clouds.png",
//   frameRate: 2, // Increase the frame rate for smoother animation
//   frameBuffer: 100, // Adjust frame buffer for desired speed
//   loop: true,

// });

const palmTree = new Sprite({
  position: { x: 80, y: 157 },
  imageSrc: "palmTree.png",
  frameRate: 4, // Increase the frame rate for smoother animation
  frameBuffer: 15, // Adjust frame buffer for desired speed
  loop: true,

});
const palmTree2 = new Sprite({
  position: { x: 740, y: 286 },
  imageSrc: "palmTree.png",
  frameRate: 4, // Increase the frame rate for smoother animation
  frameBuffer: 15 , // Adjust frame buffer for desired speed
  loop: true,

});
const water = new Sprite({
  position: {
    x: 170,
    y: 480,
  },
  frameRate: 4, // Increase the frame rate for smoother animation
  frameBuffer: 15 , // Adjust frame buffer for desired speed
  loop: true,
  imageSrc: "water.png",
});
const waterSmall = new Sprite({
  position: {
    x: 420,
    y: 420,
  },
  frameRate: 4, // Increase the frame rate for smoother animation
  frameBuffer: 9, // Adjust frame buffer for desired speed
  loop: true,
  imageSrc: "waterSmall.png",
});
const waterSmallTwo = new Sprite({
  position: {
    x: 600,
    y: 410,
  },
  frameRate: 4, // Increase the frame rate for smoother animation
  frameBuffer: 9 , // Adjust frame buffer for desired speed
  loop: true,
  imageSrc: "waterSmall.png",
});

const palmTreeSide = new Sprite({
  position: {
    x: 415,
    y: 290,
  },
  frameRate: 4, // Increase the frame rate for smoother animation
  frameBuffer: 15 , // Adjust frame buffer for desired speed
  loop: true,
  imageSrc: "palmSide.png",
});
const palmTreeSide2 = new Sprite({
  position: {
    x: 588,
    y: 260,
  },
  frameRate: 4, // Increase the frame rate for smoother animation
  frameBuffer: 15 , // Adjust frame buffer for desired speed
  loop: true,
  imageSrc: "palmSide2.png",
});

const cloudBig = new Sprite({
  position: {
    x: 100,
    y: 310,
  },
  frameRate: 1, // Increase the frame rate for smoother animation
  frameBuffer: 150 , // Adjust frame buffer for desired speed
  loop: true,
  
  imageSrc: "Big Clouds.png",
});

const cloudBig2 = new Sprite({
  position: {
    x: 600,
    y: 310,
  },
  frameRate: 1, // Increase the frame rate for smoother animation
  frameBuffer: 100 , // Adjust frame buffer for desired speed
  loop: true,
  
  imageSrc: "Big Clouds.png",
});
