let humanWalk;
let numOfKeys=[]
let locksToRemove=1

function setup() {
  createCanvas(600,400);
  toRemove = random(2,4);
  humanWalk = new human(width*0.5,height*0.5);
  for(i=0; i<toRemove; i++){
    locksToRemove +=1
    let startX = random(20,width-20);
    let startY = random(20,height-20);
    numOfKeys.push(new key(startX,startY));
  }
}

function mousePressed() {
  for (let i = numOfKeys.length - 1; i >= 0; i--) {
    if (numOfKeys[i].checkMouse()) {
      numOfKeys.splice(i, 1);
      locksToRemove = locksToRemove-1
    }
  }
}

function draw() {
  background(0);
  far = dist(mouseX,mouseY,10,10)
  if(far<50){
    //unclickable lock
    push()
      stroke(192)
      translate(10,10);
      noFill();
      ellipse(7.5,-2,8,10);
      noStroke();
      fill(204,164,61);
      square(0,0,15,2);
      fill(0);
      stroke(0);
      strokeWeight(2)
      ellipse(7.5,5,3);
      line(7.5,5,7.5,12);
    pop()
  }

  if (millis()/1000<3){
    push()
    textSize(width*0.06)
    stroke(255)
    textFont('Courier New')
    text("Find all the locks to",width*0.09,height*0.5)
    text("finish the game",width*0.15,height*0.7)
    pop()

  }
  else{
  humanWalk.update();
  humanWalk.display();
  for(let i =0; i<numOfKeys.length;i++){
    m = dist(mouseX,mouseY,numOfKeys[i].x,numOfKeys[i].y)
    if (m <75){
    numOfKeys[i].display()
    }
  }

  push()
    stroke(0)
    fill(60)
    textSize(20)
    text('Number of Locks to Remove: '+locksToRemove,5,20)
  pop()
}
}

class key {
  constructor(startX,startY){
    this.x = startX
    this.y = startY
  }

  checkMouse(){
    let mouseDistance = dist(mouseX, mouseY,this.x,this.y);
    if(mouseDistance < 50){
      return true
    }else{
      return false
    }
  }

  display(){
    push()
    stroke(192)
      translate(this.x,this.y);
      noFill();
      ellipse(7.5,-2,8,10);
      noStroke();
      fill(204,164,61);
      square(0,0,15,2);
      fill(0);
      stroke(0);
      strokeWeight(2)
      ellipse(7.5,5,3);
      line(7.5,5,7.5,12);
    pop()
  }
}

class human {
  constructor(startX,startY){
    this.x = startX;
    this.y = startY;
  }

  update(){
    this.x = mouseX
    this.y = mouseY
  }

  display(){
    push()
      translate(this.x,this.y);
      strokeWeight(5);
      stroke(30);
      fill(30);
      ellipse(0,0,30);
      line(0,15,0,40);
      line(0,19,-10,25);
      line(0,19,10,25);
      line(0,40,-10,47);
      line(0,40,10,47);
    pop()
    push()
    translate(this.x,this.y);
    fill(255,255,255,20);
    ellipse(0,20,100);
    pop()
  }
}
