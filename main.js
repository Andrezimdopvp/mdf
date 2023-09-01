var bracoesquerdo;
var bracodireito;
var diferenca;
function setup() {
    video = createCapture(VIDEO);
    video.size(600, 500); 

    canvas = createCanvas(800, 550);
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
    textSize(diferenca);
    fill("red");
    text("André Augusto Enes Coelho", 50, 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        bracoesquerdo = results[0].pose.leftWrist.x;
        bracodireito = results[0].pose.rightWrist.x;
        diferenca = floor(bracoesquerdo - bracodireito);
    }
}