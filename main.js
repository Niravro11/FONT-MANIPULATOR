leftwristX= 0;
rightwristX= 0;
difference= 0;
function setup () {
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded() {
    console.log('PoseNet is intialized!');
}
function gotposes(results) {
     if (results.length > 0) {
         console.log (results);
         leftwristX= results[0].pose.leftWrist.x;
         rightwristX= results[0].pose.rightWrist.x;
         difference = floor(leftwristX - rightwristX);
         console.log("leftwristX="+ leftwristX + "rightwristX=" + rightwristX);
     }
}
function draw() {
    background ('#6C91C2');
    textsize(difference)
    fill('#FFE787');
    text('Niravro',50,400);
}
