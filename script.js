const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

const frameCount = 240;
const images = [];
let loadedImages = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Load images
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  const frameNumber = String(i).padStart(3, "0");
  img.src = `images/ezgif-frame-${frameNumber}.jpg`;
  img.onload = () => loadedImages++;
  images.push(img);
}

// Draw image centered
function drawFrame(index) {
  const img = images[index];
  if (!img) return;

  const scale = Math.max(
    canvas.width / img.width,
    canvas.height / img.height
  );

  const x = (canvas.width - img.width * scale) / 2;
  const y = (canvas.height - img.height * scale) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

// Scroll animation
window.addEventListener("scroll", () => {
  if (loadedImages < frameCount) return;

  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;

  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => drawFrame(frameIndex));
});
