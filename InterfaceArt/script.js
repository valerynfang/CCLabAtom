let posX = 40;
let posY = 40;
let num



function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasContainer");
  background(215, 250, 249);
  rectMode(CENTER);
  frameRate(5);

}

function draw() {
    let numm = numOfSquare.value
    size = map(numm,0,100,2,13)
    let oneBox = showOneBox.checked
    console.log(oneBox)
    if (oneBox==true) {
      background(215, 250, 249);
    }

    push();
      translate(posX, posY);
      noFill();
      rect(0, 0, 40, 40)

    pop()

    rep = size
      for (let i = 0; i < rep +1; i++){
        let max = 37
        let min = 19
        size = random(min,max)
        leftover = 40 - size

        square(posX,posY,size)
        fill(84, 125, 186,random(0,100))
        max = leftover
        min = 0
      }

    posX = posX + 40;


    if(posX > 380){
      posX = 40;
      posY = posY + 40;
    }

    if(posY > 360){
      noLoop();
    }

}
