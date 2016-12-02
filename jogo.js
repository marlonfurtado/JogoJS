var barraAltura, barraLargura, jogadorPosicaoX, velocidadeJogador,
bolaDiametro, bolaPosX, bolaPosY, velocidadeBola, pontosJogador, colisao;

function iniciar(){
  canvas = document.querySelector(".canvas");
  context = canvas.getContext("2d");

  barraAltura = 15;
  barraLargura = 90;

  jogadorPosicaoX = (canvas.width - barraLargura) / 2;
  velocidadeJogador = 10;

  bolaDiametro = 15;
  bolaPosX = canvas.width / 2;
  bolaPosY = -10;
  velocidadeBola = 10;

  pontosJogador = 0;
  colisao = false;

  document.addEventListener('keydown', keyDown);
  setInterval(gameLoop, 30);
}

function keyDown(e){
  if (e.keyCode == 37){
    if (jogadorPosicaoX > 0){
      jogadorPosicaoX -= velocidadeJogador;
    }
  }

  if (e.keyCode == 39){
    if (jogadorPosicaoX < (canvas.width - barraLargura)){
      jogadorPosicaoX += velocidadeJogador;
    }
  }
}

function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(bolaPosX, bolaPosY, bolaDiametro, 0, Math.PI*2, true);
  context.fill();

  if(bolaPosY <= canvas.height){
    bolaPosY += velocidadeBola;
  }
  else{
    bolaPosX = Math.random() * 600;
    bolaPosY = -10;
    colisao = false;
  }

  if((bolaPosX > jogadorPosicaoX && bolaPosX < jogadorPosicaoX + barraLargura) && bolaPosY >= canvas.height - barraAltura && colisao == false){
    pontosJogador++;
    colisao = true;
  }

  context.font = "32pt Tahoma";
  context.fillText(pontosJogador, canvas.width - 70, 50);
  context.fillRect(jogadorPosicaoX, canvas.height - barraAltura, barraLargura, barraAltura);
}
