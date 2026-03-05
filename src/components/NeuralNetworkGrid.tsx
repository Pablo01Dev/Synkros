"use client";
import React, { useRef, useEffect } from 'react';

export default function NeuralNetworkGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    // Aumentei para 60 pontos já que a área agora é maior (o fundo da seção)
    const particleCount = 60; 
    const connectionDistance = 200;

    const resize = () => {
      // Pega o tamanho da seção inteira ou da janela
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 600;
    };

    class Particle {
      x = Math.random() * window.innerWidth;
      y = Math.random() * 800;
      vx = (Math.random() - 0.5) * 0.5;
      vy = (Math.random() - 0.5) * 0.5;
      radius = Math.random() * 3 + 2; 

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
    }

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };

    const draw = () => {
      // Fundo escuro transparente para não matar o fundo do site
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.lineWidth = 1.8; 

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00ff66'; 
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 102, ${1 - dist / connectionDistance})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    init();
    draw();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}