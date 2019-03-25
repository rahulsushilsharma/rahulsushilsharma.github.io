class ball {
  constructor() {
    this.x = 100;
    this.y = height;
    this.d = 30;
    this.s = 0;
    this.g = 0.35;
    this.up = 85;
    this.f = 0.05;
  }
  fall() {
    this.y += this.s;
    this.s += this.g;
    this.s -= this.f;
    if ((this.y+this.d/2) > height)  {
      this.y = height-this.d/2;
    }
  }
  bounce() { 
    this.s = 0;
    this.y -= this.up;
  }

  show() {
    fill(255,0,10);
    ellipse(this.x,this.y,this.d);
  }
}