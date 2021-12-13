

let img;

function preload() {
  img = loadImage("pictures/static.gif")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  image(img,0,0,windowWidth,windowHeight);
  color = random(150,255)
  stroke(color)
  fill(color)
  textFont("Georgia")
  textSize(windowWidth*0.1)
  text("Error!",windowWidth*0.40,windowHeight*0.4)
  text("Finish Stage 2",windowWidth*0.2,windowHeight*0.65)


}
