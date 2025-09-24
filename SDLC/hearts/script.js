const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Function to draw a heart
function drawHeart(ctx, x, y, size, color) {
  ctx.save(); // Save the current canvas state
  ctx.beginPath(); // Start a new path

  // Define the heart shape using Bezier curves
  ctx.moveTo(x, y + size * 0.8); // Starting point (bottom tip of the heart)
  ctx.bezierCurveTo(
    x + size, y - size / 3, // Control point 1
    x + size / 2, y - size / 2, // Control point 2
    x, y // End point for the right curve
  );
  ctx.bezierCurveTo(
    x - size / 2, y - size / 2, // Control point 1
    x - size, y - size / 3, // Control point 2
    x, y + size * 0.8 // End point for the left curve (back to the bottom tip)
  );

  ctx.closePath(); // Close the path
  ctx.fillStyle = color; // Set the fill color
  ctx.fill(); // Fill the heart shape
  ctx.restore(); // Restore the previous canvas state
}

// Heart particles
class Heart {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 20 + 20;
    this.speed = Math.random() * 2 + 2;
    this.color = Math.random() > 0.5 ? 'blue' : 'white';
    this.angle = Math.random() * 2 * Math.PI;
    this.angularSpeed = (Math.random() - 0.5) * 0.02;
  }
  update() {
    this.y -= this.speed;
    this.angle += this.angularSpeed;
    this.x += Math.sin(this.angle) * 0.5;
    if (this.y < -50) this.reset();
  }
  draw() {
    drawHeart(ctx, this.x, this.y, this.size, this.color);
  }
}

// Create many hearts
const hearts = Array.from({ length: 100 }, () => new Heart());

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}
animate();