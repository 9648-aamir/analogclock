setInterval(timing, 1000);

// Create second canvas that will overlay the first
var canvas2 = document.createElement("canvas");
canvas2.width = 500;
canvas2.height = 500;
canvas2.style.position = "absolute";
document.body.appendChild(canvas2);

var canvas1 = document.createElement("canvas");
canvas1.id = "canvas-1";
document.body.appendChild(canvas1);
canvas1.width = 500;
canvas1.height = 500;
canvas1.style.backgroundColor = "#3d3d3b";
var radius = (canvas1.height/2) * 0.9;

var ctx = canvas1.getContext("2d");  

ctx.beginPath();
ctx.arc(250,250,radius,0,2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 250, radius * 0.1, 0, 2 * Math.PI);
ctx.fillStyle = '#333';
ctx.fill();

ctx.beginPath();
ctx.lineWidth = radius * 0.05;
ctx.stroke();
ctx.font = "40px Georgia"
ctx.textBaseline="middle";
ctx.textAlign="center";
for (i=1;i<13;i++){
    ctx.fillText(i.toString(), 250+(Math.sin(i*Math.PI/6)*radius*0.8), 250-Math.cos(i*Math.PI/6)*radius*0.8);
}

// Switch the context to the overlayed canvas
ctx = canvas2.getContext("2d");

function timing(){
    // Clear the second canvas (only)
    ctx.clearRect(0, 0, 500, 500);
    const d = new Date();

    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineWidth = radius*0.01;
    ctx.lineTo(250+(Math.sin(d.getSeconds()*Math.PI/30)*radius*0.85), 250-Math.cos(d.getSeconds()*Math.PI/30)*radius*0.85);        
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineWidth = radius*0.03;
    ctx.lineTo(250+(Math.sin(d.getMinutes()*Math.PI/30)*radius*0.78), 250-Math.cos(d.getMinutes()*Math.PI/30)*radius*0.78);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineWidth = radius*0.05;
    ctx.lineTo(250+(Math.sin(d.getHours()*Math.PI/6)*radius*0.7), 250-Math.cos(d.getHours()*Math.PI/6)*radius*0.7);
    ctx.stroke();
}


