const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStar() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 1.5 + 0.5
    };
}

for (let i = 0; i < 200; i++) {
    stars.push(createStar());
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x -= star.speed;
        star.y += star.speed * 0.1;

        if (star.x < 0 || star.y > canvas.height) {
            stars[i] = createStar();
            stars[i].x = canvas.width;
        }
    }

    requestAnimationFrame(animateStars);
}

animateStars();
