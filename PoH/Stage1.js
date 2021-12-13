
let img;
let acne_draw =[]

function preload() {
  img = loadImage("pictures/face.jpg")
}

function setup() {
  createCanvas(500, 500);

}


function draw() {
  image(img,0,0,width,height)

}
