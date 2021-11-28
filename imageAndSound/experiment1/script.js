

console.log("hello")

let img;
let horseX =100;

function preload() {
  img = loadImage("assets/images/horse1.jpg")
  for ( let i = 0; i<5; i++ ){
    console.log('hheloo'+ i);
    let path = "assets/images/horse" + i + ".jpg";
    console.log("loading", path);
    let img = loadImage(path);
    imgArray.push(img);
  }

}

function setup() {
  createCanvas(800,300);
}

function draw() {
  background(0);
  image(img,horseX,0,200,150);

  horseX+=2
  if (horseX>width){
    horseX = -200
  }

}
