function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  somDoJogo.loop();
  jogo = new Jogo();
  jogo.setup();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function touchStarted() {
  personagem.pula()
  somDoPulo.play()
}

function draw() {
  jogo.draw();
}