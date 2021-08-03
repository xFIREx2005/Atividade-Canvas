const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

//cria um degrade radial para o fundo
var grd = ctx.createRadialGradient(150, 80, 30, 150, 80, 140);
grd.addColorStop(0, "#00BFFF");
grd.addColorStop(1, "black");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 200);

//cria um degrade linear para o pescoço
var grd1 = ctx.createLinearGradient(0,140,0,100);
grd1.addColorStop(1, "#363636");
grd1.addColorStop(0, "#DEB887");
ctx.fillStyle = grd1;
ctx.fillRect(125, 120, 50, 30);

//cria um degrade linear para a cabeça
var grd2 = ctx.createLinearGradient(44, 50,45, 0);
grd2.addColorStop(1, "#fff");
grd2.addColorStop(0, "#DEB887");
ctx.fillStyle = grd2;
ctx.fillRect(100, 10, 100, 110);

//cria as linhas do quadrado da cabeça
ctx.moveTo(100,10);
ctx.lineTo(100,120);
ctx.lineTo(200,120);
ctx.lineTo(200,10);
ctx.lineTo(100,10);
ctx.strokeStyle="black"
ctx.stroke();

//cria as linhas do nariz
ctx.moveTo(150,55);
ctx.lineTo(150,85);
ctx.lineTo(145,75);
ctx.lineTo(150,85);
ctx.lineTo(155,75);
ctx.strokeStyle="black";
ctx.stroke();

//cria a linha curvada da boca
ctx.beginPath();
ctx.moveTo(125, 100);
ctx.bezierCurveTo(150,110, 150,110, 175,100);
ctx.stroke();

//cria uma linha do pescoço
ctx.moveTo(125,200);
ctx.lineTo(125,120);
ctx.strokeStyle="black";
ctx.stroke();

//cria a segunda linha do pescoço
ctx.moveTo(175,200);
ctx.lineTo(175,120);
ctx.strokeStyle="black";
ctx.stroke();

//cria o circulo branco do olho 
ctx.beginPath();
ctx.arc(125, 55, 10, 0, 2 * Math.PI);
ctx.fillStyle= "white";
ctx.fill();

//cria o circulo branco do outro olho 
ctx.beginPath();
ctx.arc(175, 55, 10, 0, 2 * Math.PI);
ctx.fillStyle= "white";
ctx.fill();


//cria o circulo azul do olho 
const circle1 = new Path2D();
circle1.arc(175, 55, 6, 0, 2 * Math.PI);
ctx.fillStyle= "#00BFFF";
ctx.fill(circle1);

//cria o circulo azul do outro olho 
const circle2 = new Path2D();
circle2.arc(125, 55, 6, 0, 2 * Math.PI);
ctx.fillStyle= "#00BFFF";
ctx.fill(circle2);


//codigo da mudança de cor do olho
canvas.addEventListener('mousemove', function(event) {

  if (ctx.isPointInPath(circle1, event.offsetX, event.offsetY) || ctx.isPointInPath(circle2, event.offsetX, event.offsetY)) {
    ctx.fillStyle = 'green';
    
  }
  else {
    ctx.fillStyle = '#00BFFF';
  }
    ctx.fill(circle1);
    ctx.fill(circle2);
});

ctx.font = "15px Arial";
ctx.fillText("Feliz", 10, 145);