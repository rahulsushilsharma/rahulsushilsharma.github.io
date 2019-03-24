class Bubble {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show(){
    fill(0);
    stroke(255,50);
    strokeWeight(2)
    ellipse(this.x,this.y,this.r*2);
    print(this.r)
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
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
  check() {
    if(this.r>200||this.r<=0) {
      this.r = random(10,50);
    }
  }
}
