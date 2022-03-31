const data = [
  { name: 'questions', value: 17 },
  { name: 'schools', value: 25 },
  { name: 'philosophers', value: 35 },
];
// 图表尺寸
const charWidth = 480;
const charHeight = 300;
const margin = 200;
const containerWidth = charWidth + margin * 2;
const containerHeight = charHeight + margin * 2;

// 数据提取
const names = Array.from(data, (d) => d.name);
const values = Array.from(data, (d) => d.value);
const indices = Array.from(data, (_, i) => i);

// 布局
const step = charWidth / names.length;
const barWidth = step * 0.8;
const xs = Array.from(indices, (i) => i * step);
const y = charHeight;

// 映射
const vmax = Math.max(...values);
const barHeights = Array.from(values, (v) => charHeight * (v / vmax));
const nameColor = {
  questions: '#5B8FF9',
  philosophers: '#61DDAA',
  schools: '#65789B',
};
const colors = Array.from(names, (name) => nameColor[name]);

// 绘制
const canvas = document.getElementById('canvas');
canvas.style.width = `${containerWidth}px`;
canvas.style.height = `${containerHeight}px`;

canvas.width = containerWidth * 2;
canvas.height = containerHeight * 2;

const context = canvas.getContext('2d');
context.scale(2, 2);
context.translate(margin, margin); // 将坐标原点移动到绘制图表的区域

indices.forEach((index) => {
  const color = colors[index];
  const x = xs[index];
  const barHeight = barHeights[index];
  const value = values[index];

  context.fillStyle = color;
  context.fillRect(x, y - barHeight, barWidth, barHeight);

  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = 'white';
  context.font = 'sans-serif';
  context.fillText(value, x + barWidth / 2, y - barHeight / 2);
});

// svg
function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

const svg = document.getElementById('svg-container');
svg.setAttribute('width', containerWidth);
svg.setAttribute('height', containerHeight);
svg.setAttribute('viewBox', [0, 0, containerWidth, containerHeight]);

const g = createSVGElement('g');
g.setAttribute('transform', `translate(${margin}, ${margin})`);
svg.appendChild(g);

indices.forEach((index) => {
  const color = colors[index];
  const x = xs[index];
  const barHeight = barHeights[index];
  const value = values[index];

  const rect = createSVGElement('rect');
  rect.setAttribute('x', x);
  rect.setAttribute('y', y - barHeight);
  rect.setAttribute('fill', color);
  rect.setAttribute('width', barWidth);
  rect.setAttribute('height', barHeight);
  g.appendChild(rect);

  const text = createSVGElement('text');
  text.textContent = value;
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('fill', 'white');
  text.setAttribute('font-family', 'sans-serif');
  text.setAttribute('font-size', 25);
  text.setAttribute('alignment-baseline', 'middle');
  text.setAttribute('x', x + barWidth / 2);
  text.setAttribute('y', y - barHeight / 2);
  g.appendChild(text);
});
