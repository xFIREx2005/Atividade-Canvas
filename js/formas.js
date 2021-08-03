const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

var grd = ctx.createRadialGradient(150, 80, 30, 150, 80, 140);
grd.addColorStop(0, "#00BFFF");
grd.addColorStop(1, "black");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 200);

var grd1 = ctx.createLinearGradient(0,140,0,100);
grd1.addColorStop(1, "#363636");
grd1.addColorStop(0, "#DEB887");
ctx.fillStyle = grd1;
ctx.fillRect(125, 120, 50, 30);

var grd = ctx.createLinearGradient(44, 50,45, 0);
grd.addColorStop(1, "#fff");
grd.addColorStop(0, "#DEB887");
ctx.fillStyle = grd;
ctx.fillRect(100, 10, 100, 110);

ctx.moveTo(100,10);
ctx.lineTo(100,120);
ctx.lineTo(200,120);
ctx.lineTo(200,10);
ctx.lineTo(100,10);
ctx.strokeStyle="black"
ctx.stroke();

const circle = new Path2D();
circle.arc(125, 55, 10, 0, 2 * Math.PI);
ctx.fillStyle= "white";
ctx.fill(circle);

const circle1 = new Path2D();
circle1.arc(125, 55, 6, 0, 2 * Math.PI);
ctx.fillStyle= "#00BFFF";
ctx.fill(circle1);

const circle2 = new Path2D();
circle2.arc(175, 55, 10, 0, 2 * Math.PI);
ctx.fillStyle= "white";
ctx.fill(circle2);

const circle3 = new Path2D();
circle3.arc(175, 55, 6, 0, 2 * Math.PI);
ctx.fillStyle= "#00BFFF";
ctx.fill(circle3);





ctx.moveTo(150,55);
ctx.lineTo(150,85);
ctx.lineTo(145,75);
ctx.lineTo(150,85);
ctx.lineTo(155,75);
ctx.strokeStyle="black";
ctx.stroke();



ctx.beginPath();
ctx.moveTo(125, 100);
ctx.bezierCurveTo(150,110, 150,110, 175,100);
ctx.stroke();

ctx.moveTo(125,200);
ctx.lineTo(125,120);
ctx.strokeStyle="black";
ctx.stroke();



ctx.moveTo(175,200);
ctx.lineTo(175,120);
ctx.strokeStyle="black";
ctx.stroke();

