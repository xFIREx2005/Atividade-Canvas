const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

ctx.moveTo(20,20);
ctx.lineTo(10,20);
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.strokeStyle="#000"
ctx.stroke();

ctx.moveTo(200,20);
ctx.lineTo(200,40);
ctx.lineTo(220,100);
ctx.lineTo(270,100);
ctx.strokeStyle="#000"
ctx.stroke();