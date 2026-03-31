import { useEffect, useRef } from "react";

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      time += 0.003;

      // Clear
      ctx!.clearRect(0, 0, w, h);

      // Perspective grid
      const horizon = h * 0.35;
      const vanishX = w * 0.5;
      const gridColor = "rgba(0, 255, 170, ";

      // Horizontal lines receding into distance
      const numHLines = 30;
      for (let i = 0; i < numHLines; i++) {
        const t = (i / numHLines + time * 0.5) % 1;
        const y = horizon + (h - horizon) * Math.pow(t, 1.8);
        const alpha = 0.03 + 0.12 * Math.pow(t, 2);
        ctx!.beginPath();
        ctx!.strokeStyle = gridColor + alpha + ")";
        ctx!.lineWidth = 0.5 + t * 0.5;
        ctx!.moveTo(0, y);
        ctx!.lineTo(w, y);
        ctx!.stroke();
      }

      // Vertical lines converging to vanishing point
      const numVLines = 24;
      for (let i = 0; i < numVLines; i++) {
        const spread = (i - numVLines / 2) / (numVLines / 2);
        const bottomX = vanishX + spread * w * 0.9;
        const alpha = 0.04 + 0.06 * (1 - Math.abs(spread));
        ctx!.beginPath();
        ctx!.strokeStyle = gridColor + alpha + ")";
        ctx!.lineWidth = 0.5;
        ctx!.moveTo(vanishX, horizon);
        ctx!.lineTo(bottomX, h);
        ctx!.stroke();
      }

      // Glow at vanishing point
      const glowRadius = 80 + Math.sin(time * 2) * 20;
      const glow = ctx!.createRadialGradient(vanishX, horizon, 0, vanishX, horizon, glowRadius);
      glow.addColorStop(0, "rgba(0, 255, 170, 0.06)");
      glow.addColorStop(0.5, "rgba(0, 255, 170, 0.02)");
      glow.addColorStop(1, "rgba(0, 255, 170, 0)");
      ctx!.fillStyle = glow;
      ctx!.fillRect(vanishX - glowRadius, horizon - glowRadius, glowRadius * 2, glowRadius * 2);

      // Scanlines overlay (subtle)
      ctx!.fillStyle = "rgba(0, 0, 0, 0.03)";
      for (let y = 0; y < h; y += 3) {
        ctx!.fillRect(0, y, w, 1);
      }

      // Occasional "data" particles floating up
      const particleCount = 15;
      for (let i = 0; i < particleCount; i++) {
        const seed = i * 137.508;
        const px = (Math.sin(seed) * 0.5 + 0.5) * w;
        const py = h - ((time * 40 + seed * 7) % h);
        const pAlpha = 0.1 + 0.15 * Math.sin(time * 3 + seed);
        const pSize = 1 + Math.sin(seed * 2) * 0.5;
        ctx!.beginPath();
        ctx!.fillStyle = gridColor + Math.max(0, pAlpha) + ")";
        ctx!.arc(px, py, pSize, 0, Math.PI * 2);
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
