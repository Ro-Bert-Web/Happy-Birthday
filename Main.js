canvas = document.createElement("CANVAS");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;
ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height / 2);
document.body.appendChild(canvas);

let art = new Fourier(canvas, ctx, form);

function update(){
	art.step(0.001);
}
setInterval(update, 10);
