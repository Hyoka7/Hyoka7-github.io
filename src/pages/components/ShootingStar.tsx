import { useEffect, useRef } from "react";

type ShootingStar = {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
};

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const shootingStars: ShootingStar[] = [];
    let animationId: number;
    let lastStarTime = 0;
    const minStarInterval = 1000;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createShootingStar(): ShootingStar {
      return {
        x: Math.random() * canvas!.width * 0.8 + canvas!.width * 0.2,
        y: Math.random() * canvas!.height * 0.5,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 10 + 6,
        opacity: 1,
      };
    }
    function animate() {
      if (!ctx || !canvas) return;
      const now = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];

        const gradient = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.length,
          s.y + s.length * 0.3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length, s.y + s.length * 0.3);
        ctx.stroke();

        s.x -= s.speed;
        s.y += s.speed * 0.3;
        s.opacity -= 0.02;

        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
          i--;
        }
      }

      if (now - lastStarTime > minStarInterval && Math.random() < 0.03) {
        shootingStars.push(createShootingStar());
        lastStarTime = now;
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}
