class pipe{
  constructor() {
    this.x = width;
    this.y = height;
    this.s = -3.5;
    this.h = -floor(random(10,40));
       this.w = 13;
       this.c = 100;
  }
  show() { 
    image(tubeimg,this.x,this.y,this.w,this.h);
  }
  move() {
    this.x +=this.s;
  }
  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
  collide(ball) {
      if(ball.x+(ball.d/2)>this.x&&ball.x-(ball.d/2)<this.x+this.w) {
        if (ball.y+(ball.d/2)>this.y+this.h) {
           textSize(40)
           fill(random(255),random(255),random(255))
           text("GAME OVER",200,200,100,100);
           textSize(13)
           fill(0)
           text("Press SPACE to continue",200,300,100,100);
           score = 0;
           frameCount = 0
           frameRate(0);
           fr = 0;
           level = 1
        }
      }
    }
 levelup() {
  if (score % 70 == 0) {
    level++;
    textSize(40)
    fill(255,0,0)
    text("NEXTLEVEL",200,200,100,100);
    this.s--;
    frameRate(0);
    fr = 0;
    }
  }
 }