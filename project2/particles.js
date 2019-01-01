class particle {
  constructor() {
    this.sch = [-1.25,1.5,-1.5,0,-1,1,1.25];
    this.y = random(0,height);
    this.x = random(0,width);
    this.xs = random(this.sch);
    this.ys = random(this.sch);
  }
  show() {
    stroke(200,100);
    strokeWeight(3);
    point(this.x,this.y);
  }

  ofscreen() {
    if(this.x<0||this.x>width||this.y<0||this.y>height) {
      this.xs = -this.xs
      this.ys = -this.ys

    }
  }

  move() {
    this.x += this.xs;
    this.y += this.ys;
  }

  distance(other) {
    d = dist(this.x,this.y,other.x,other.y);
    if (d<90) {
    str =  map(d,90,0,0,255)
      stroke(str);
      strokeWeight(0.7)
      line(this.x,this.y,other.x,other.y);
    }
  }
}
