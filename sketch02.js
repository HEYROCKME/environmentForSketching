const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const pi = Math.PI;
// const degToRad = (degrees) => (degrees / 180) * pi;
// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "salmon";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "white";
    console.log(width * 0.5);
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 12 + Math.random() * 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.lineWidth = random.range(5, 20);
      context.scale(random.range(0.1, 1), random.range(0.2, 0.5));
      context.beginPath();
      context.rect(-w * 0.5, random.range(2, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(angle);
      context.lineWidth = random.range(5, 20);
      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(0, -0.9),
        slice * random.range(1, 0.5)
      );
      context.stroke();
      context.restore();
    }

    // context.translate(100, 400);

    // context.beginPath();
    // context.arc(0, 0, 50, 0, pi * 2);
    // context.fill();
  };
};

canvasSketch(sketch, settings);
