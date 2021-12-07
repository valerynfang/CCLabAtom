
let img;
let shower = []
let thermometer
let count = 0


function preload() {
  img = loadImage("pictures/bathroom2.png")
}

function setup() {
  createCanvas(600,400);

  for(i=0; i<20; i++){
    startX = random(width*0.03,width*0.25)
    startY = random(width*0.1,height)
    shower.push(new water(startX,startY))
  }
  thermometer = new temperature(290,0)
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    thermometer.goingUp()
    count = count + 1
  }
}

function draw() {
  //background image
  background(220);
  tint(255,255,255,50);
  image(img,0,0,width,height);

  sec = frameCount/60
  timeLeft = 5 - sec
  push()
    stroke(255)
    textSize(15)
    text('Time left: '+ round(timeLeft),495,15)
  pop()
  push()
  if (timeLeft<0){
    background(0)
    textSize(60)
    fill(255,0,0)
    if (count==23){
      text("You win!",170,200)
    }else{
    text("Game Over!",160,200)
  }
  pop()
  }else{
  //instruction
  push()
  textSize(30)
  text("Press the up ",400,190)
  text("Arrow before the",370,230)
  text("the runs out",400,270)
  pop()

  //showerhead
  push()
    noStroke()
    translate(0,height*0.1)
    fill(192);
    rect(0,height*0.05,width*0.15,height*0.02);
    rect(width*0.1,height*0.05,width*0.05,height*0.07);
    ellipse(width*0.13,height*0.15,width*0.2,width*0.07);
  pop()

  for (let i =0; i < shower.length;i++){
    shower[i].update()
    shower[i].display()

  }
  //person
  push()
  translate(0,height*0.1)
    noStroke()
    ellipse(width*0.13,height*0.45,width*0.1);
    strokeWeight(width*0.015);
    stroke(255);
    line(width*0.13,height*0.45,width*0.13,height*0.7);
    line(width*0.13,height*0.55,width*0.17,height*0.6);
    line(width*0.13,height*0.55,width*0.09,height*0.6);
    line(width*0.13,height*0.7,width*0.17,height*0.75);
    line(width*0.13,height*0.7,width*0.09,height*0.75);
  pop()

  // thermometer
  thermometer.display()
  }
}


class temperature{
  constructor(startX,startY){
    this.x = startX;
    this.y = startY;
    this.tall = 0;
  }

  goingUp(){
    this.tall= this.tall + 10
  }

  display(){
    push()
      noStroke();
      fill(255);
      translate(this.x,this.y);
      ellipse(0,320,120);
      rect(-35,30,70,240);
      fill(255,0,0);
      ellipse(0,320,105);
      rect(-25,270,50,-this.tall);
    pop()
  }

}

class water{
  constructor(startX,startY){
    this.x = startX
    this.y = startY
    this.scaleFactor =random(0.3,1)
    this.speed = map(this.scaleFactor,0.3,1,15,7)
    this.alpha = random(100,250)
  }

  update(){
    this.y=this.y+this.speed;
    if(this.y > height){
      this.y = random(height*0.2,height);
    }
  }
  display(){
    push();
    noStroke();
    fill(173,216,230,this.alpha);
    translate(this.x,this.y);
    scale(this.scaleFactor)
    triangle(0,0,10,30,-10,30);
    circle(0,30,20);
    pop();
  }
}
