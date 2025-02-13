"use strict";

class Mai {
  //グラフィックの描写に関する変数
  maiImage;
//  maiWid = 120;
//  maiHei = 200;
  maiX = 20;
  vX = 0;
  maiY = 300;
  vY = 0;
  click = 13;
  landed = true;
  jumped = false;
  hitted = false;
  g = 1;
  maiSize = 48;
  a_frame = 1;//0静止　12歩行　34飛行 5転び
  
//  basecolor = "#eeeeee";
//  fc_black = "#111111";
//  fc_high = "#eeaaaa";
//  fc_now = this.fc_black;

  constructor(image) {
//  this.scName = scName;
    this.maiImage = document.getElementById(image);
  }

  exec() {
  }

  move() {
    if( !this.landed ) { //地上にいない場合はジャンプの処理
      this.maiY += this.vY;
      this.vY += this.g;
    }
    //他がいい気もするけど当たり判定ここでとりあえずやる 忍者に正解があった
    if(this.maiY >= 302) {
      this.landed = true;
      this.jumped = false;
      this.maiY = 302;
      this.vY = 0;
    }
  }

  anime() {
    if(this.landed) {
      if(this.a_frame == 1 ) {
        this.a_frame++;
      }else {this.a_frame--;}
    } else {
      if(this.a_frame ==3 ) {this.a_frame++;}
      else { this.a_frame = 3;}
    }
    if(this.hitted) this.a_frame = 5;
  }

  clicked() {
    if(this.landed) {//地上にいる場合はジャンプできる
      this.vY -= this.click;
      this.landed = false;
    }else {
      if(!this.jumped){
        this.vY = -this.click;
        this.jumped = true;
        console.log("2dan");
      }
    }
  }

}