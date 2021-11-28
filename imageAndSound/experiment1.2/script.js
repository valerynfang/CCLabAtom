

console.log("hello")

let img;
let horseIndex = [];
let horseX =100;
let imgArray =[];

function preload() {
  for ( let i = 0; i<12; i++ ){
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
  image(imgArray[horseIndex],horseX,200,150)
  horseIndex++
  if (horseIndex)
  // image(img,horseX,0,200,150);
  //
  // horseX+=2
  // if (horseX>width){
  //   horseX = -200
  //}

}
