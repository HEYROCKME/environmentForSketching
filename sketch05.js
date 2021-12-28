const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

let manager;

let text = "B";
let fontSize = 1000;
let fontFamily = "serif";
let fontWeight = 900;
let fontStyle = "italic";

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "antiquewhite";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    context.textBaseline = "top";
    // context.textAlign = "center";

    const txtMetr = context.measureText(text);
    console.log(txtMetr);

    const mx = txtMetr.actualBoundingBoxLeft * -1;
    const my = txtMetr.actualBoundingBoxAscent * -1;
    const mw = txtMetr.actualBoundingBoxLeft + txtMetr.actualBoundingBoxRight;
    const mh =
      txtMetr.actualBoundingBoxAscent + txtMetr.actualBoundingBoxDescent;

    const x = (width - mw) * 0.5 - mx;
    const y = (height - mh) * 0.5 - my;

    context.save();
    context.translate(x, y);
    context.beginPath();
    // context.rect(mx, my, mw, mh);
    // context.stroke();
    context.fillText(text, 0, 0);
    context.restore();
  };
};

const onKeyUp = (e) => {
  text = e.key.toUpperCase();
  manager.render();
};

document.addEventListener("keyup", onKeyUp);

const start = async () => {
  manager = await canvasSketch(sketch, settings);
};

// const url = "https://picsum.photos/200";

// const loadMeSomeImage = (url) => {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.onerror = () => reject();
//     img.src = url;
//   });
// };

// const start = async () => {
//   const img = await loadMeSomeImage(url);
//   console.log("image width", img.width);

//   console.log("word!");
// };
// // const start = () => {
// //   loadMeSomeImage(url).then((img) => {
// //     console.log("image width", img.width);
// //   });
// //   console.log("word!");
// // };

start();
