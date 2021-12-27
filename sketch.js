const canvasSketch = require("canvas-sketch");

const settings = {
  // dimensions: "A4",
  // pixelsPerInch: 300,
  // orientation: "landscape",

  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "salmon";
    context.strokeStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const rectH = height * 0.1;
    const rectW = width * 0.1;
    const gap = width * 0.033;
    let x, y;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.04;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (rectW + gap) * i;
        y = iy + (rectH + gap) * j;
        context.beginPath();

        context.rect(x, y, rectW, rectH);

        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.strokeStyle = "black";
          // context.rotate((ix * Math.PI) / 180 + i);
          context.rect(x + off / 2, y + off / 2, rectW - off, rectH - off);
          context.stroke();
          context.strokeStyle = "white";
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
