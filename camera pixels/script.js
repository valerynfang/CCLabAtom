let img;
let cam;

function preload(){
  img = createImage(640,480); //blank image
}

function setup(){
  createCanvas(640,480);
  cam = createCapture(VIDEO);
  cam.hide()
}

function draw(){
  background("yellow");

  //access pixels of image
  //load pixels
  img.loadPixels();
  cam.loadPixels();
  //loop over each row
  for(let y=0; y < 480; y++){
    //loop over each column
    for(let x=0; x < 640; x++){
      //READ value from CAMERA pixel array
      //get color from cam pixels
      let index = (y * width + x) * 4;
      let red   = cam.pixels[index+0];
      let green = cam.pixels[index+1];
      let blue  = cam.pixels[index+2];
      //let alpha = cam.pixels[index+3];

      // CHANGE values inside IMG pixel array

      img.pixels[ index+0 ] = red; //r
      img.pixels[ index+1 ] = 10;   //g
      img.pixels[ index+2 ] = blue;   //b
      img.pixels[ index+3 ] = 255; //a

    }
  }
  //update loadPixels
  img.updatePixels();


  image(img,0,0);


}
