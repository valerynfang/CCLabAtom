console.log('script works!')

function setup(){
  let canvas = createCanvas(200,200);
  canvas.parent("canvasContainer");
  background(0);
}

function draw(){
  background(0);
  fill("lightyellow");

  let sliderVal = circlePositionSlider.value
  let sizeSliderVal = circleSizeSlider.value
  console.log(sizeSliderVal)
  let size = map(sizeSliderVal,0,100,0,width/2)
  console.log(sliderVal)
  let x = map(sliderVal,0,100,0,width)
  circle(x,height/2,size);
}
