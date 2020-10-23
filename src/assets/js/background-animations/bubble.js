class Bubble {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedx = random(-2,2)
    this.speedy = random(-2,2)
  }
  show(){
    fill("#f0f8ff");
    stroke('#d7ecff');
    strokeWeight(2)
    ellipse(this.x,this.y,this.r*2);
  }
  collide(other){
    let d = dist(this.x,this.y,other.x,other.y);
    return (d<other.r+this.r);
  }
  collapse(other) {
    if(this.r>other.r) {
      this.r = this.r + 1;
      other.r = other.r - 1;
    } else if (other.r>this.r) {
      this.r = this.r - 1;
      other.r = other.r + 1;
    }
  }
  move() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }
  check() {
    if(this.r>100||this.r<=0) {
      this.r = random(10,50);
    }
  }
  ofscreen() {
    if(this.x<0||this.x>width||this.y<0||this.y>height) {
      this.speedx = -this.speedx
      this.speedy = -this.speedy

    }
  }
}
