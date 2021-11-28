let cam;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let eyerX = 0;
let eyerY = 0;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
  poseNet = ml5.poseNet(cam, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses)
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let e1X = poses[0].pose.keypoints[1].position.x;
    let e1Y = poses[0].pose.keypoints[1].position.y;
    let e2X = poses[0].pose.keypoints[2].position.x;
    let e2Y = poses[0].pose.keypoints[2].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, e1X, 0.5);
    eyelY = lerp(eyelY, e1Y, 0.5);
    eyerX = lerp(eyerX, e2X, 0.5);
    eyerY = lerp(eyerY, e2Y, 0.5);
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  image(cam, 0, 0);
  filter(GRAY)

  let d = (dist(noseX, noseY, eyelX, eyelY)-20);
  let m = (dist(eyelX,eyelY,eyerX,eyerY)-30);
  push()
    fill(255, 0, 0);
    noStroke();
    ellipse(noseX, noseY, d);
  pop()

  push()
    noFill();
    strokeWeight(3);
    stroke(0);
    ellipse(eyelX,eyelY,m);
    ellipse(eyerX,eyerY,m);
    line(eyelX-30,eyelY,eyerX+30,eyerY)
  pop()



}
