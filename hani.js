"use strict";

class Hani {

  haniImage;
  haniX = 600;
  vX = 0;
  haniY = 300;
  vY = 0;
  click = 10;
  landed = true;
  g = 1;
  haniSize = 48;
  a_frame = 0;//01くね
  hani_speed = 6;
  xhos = 8;
  yhos = 2;

  constructor(image,speed) {
    this.haniImage = document.getElementById(image);
    this.hani_speed = speed;
  }

  exec() {
    if(this.haniX<-50 ) {
      let i = Math.floor(Math.random() * (1000 - 450)) + 450;
      this.haniX=i;
      i = Math.floor(Math.random() * (20 - 6)) + 6;
      this.hani_speed = i;
    }
  }

  move() {
    this.haniX -= this.hani_speed;
  }
  anime() {
    if(this.a_frame ==0 ) {this.a_frame++;}
    else {this.a_frame--;}
  }
  isHit(mx,my,ms) {//少し当たり判定を狭くしたいね
    let xhit = false;
    let yhit = false;
    if( ( this.haniX>=mx+this.xhos && this.haniX<=mx+ms-this.xhos ) ||  ( this.haniX+this.haniSize>=mx+this.xhos && this.haniX+this.haniSize<=mx+ms-this.xhos ) ) {
      xhit = true;
    }
    if( ( this.haniY>=my && this.haniY<=my+ms ) ||  ( this.haniY+this.haniSize>=my && this.haniY+this.haniSize<=my+ms ) ) {
      yhit = true;
    }

    if(xhit&&yhit) return true;
    else return false;
  }
}