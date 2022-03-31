const canvas = document.getElementById('canvas');
canvas.style.width = `${400}px`;
canvas.style.height = `${200}px`;

// 画布宽高
canvas.width = 400;
canvas.height = 200;

const context = canvas.getContext('2d');
context.fillStyle = 'red';
context.strokeStyle = 'yellow';
context.lineWidth = 10;
context.strokeRect(0, 0, 100, 100);
context.fillRect(5, 5, 95, 95);

context.fillStyle = 'black';
context.font = 'sans-serif';
context.fillText('hello world', 150, 100);

context.fillStyle = 'red';
context.fillRect(0, 0, 50, 50);

context.fillStyle = 'blue';
context.translate(150, 150);
context.rotate(-Math.PI / 6);
context.scale(2, 3);
context.fillRect(0, 0, 50, 50);
