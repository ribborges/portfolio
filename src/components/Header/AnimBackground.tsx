"use client";

import { useEffect, useRef } from "react";

interface LightBeam {
	x: number;
	y: number;
	vx: number;
	vy: number;
	length: number;
	intensity: number;
	direction: "horizontal" | "vertical";
}

export function AnimatedGridBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			const rect = container.getBoundingClientRect();
			canvas.width = rect.width;
			canvas.height = rect.height;
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const gridSize = 34;

		const beams: LightBeam[] = [];
		const numBeams = 16;

		const resetBeam = (beam: LightBeam) => {
			const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
			const speed = 1.2 + Math.random() * 1.5;

			beam.direction = direction;
			beam.length = 100 + Math.random() * 100;
			beam.intensity = Math.random() * 0.2;

			if (direction === "horizontal") {
				// Feixe horizontal - começa da esquerda ou direita
				beam.x =
					Math.random() < 0.5
						? -beam.length
						: canvas.width + beam.length;
				beam.y =
					Math.floor(Math.random() * (canvas.height / gridSize)) *
					gridSize;
				beam.vx = beam.x < canvas.width / 2 ? speed : -speed;
				beam.vy = 0;
			} else {
				// Feixe vertical - começa de cima ou de baixo
				beam.x =
					Math.floor(Math.random() * (canvas.width / gridSize)) *
					gridSize;
				beam.y =
					Math.random() < 0.5
						? -beam.length
						: canvas.height + beam.length;
				beam.vx = 0;
				beam.vy = beam.y < canvas.height / 2 ? speed : -speed;
			}
		};

		for (let i = 0; i < numBeams; i++) {
			const beam: LightBeam = {
				x: 0,
				y: 0,
				vx: 0,
				vy: 0,
				length: 0,
				intensity: 0,
				direction: "horizontal",
			};
			resetBeam(beam);
			beams.push(beam);
		}

		const animate = () => {
			ctx.fillStyle = "#09090b";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.strokeStyle = "#0f0f0f";
			ctx.lineWidth = 1;

			for (let x = 0; x < canvas.width; x += gridSize) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}

			for (let y = 0; y < canvas.height; y += gridSize) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}

			beams.forEach((beam) => {
				const gradient = ctx.createRadialGradient(
					beam.x,
					beam.y,
					0,
					beam.x,
					beam.y,
					beam.length,
				);
				gradient.addColorStop(
					0,
					`rgba(255, 255, 255, ${beam.intensity})`,
				);
				gradient.addColorStop(
					0.2,
					`rgba(200, 200, 200, ${beam.intensity * 0.2})`,
				);
				gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");

				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(beam.x, beam.y, beam.length, 0, Math.PI * 2);
				ctx.fill();

				const angle =
					beam.direction === "horizontal"
						? beam.vx > 0
							? 0
							: Math.PI
						: beam.vy > 0
							? Math.PI / 2
							: -Math.PI / 2;
				const trailGradient = ctx.createLinearGradient(
					beam.x,
					beam.y,
					beam.x - Math.cos(angle) * beam.length * 2,
					beam.y - Math.sin(angle) * beam.length * 2,
				);
				trailGradient.addColorStop(
					0,
					`rgba(255, 255, 255, ${beam.intensity * 0.6})`,
				);
				trailGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

				ctx.strokeStyle = trailGradient;
				ctx.lineWidth = 3;
				ctx.beginPath();
				ctx.moveTo(beam.x, beam.y);
				ctx.lineTo(
					beam.x - Math.cos(angle) * beam.length * 2,
					beam.y - Math.sin(angle) * beam.length * 2,
				);
				ctx.stroke();

				beam.x += beam.vx;
				beam.y += beam.vy;

				if (beam.direction === "horizontal") {
					if (
						beam.x < -beam.length ||
						beam.x > canvas.width + beam.length
					) {
						resetBeam(beam);
					}
				} else {
					if (
						beam.y < -beam.length ||
						beam.y > canvas.height + beam.length
					) {
						resetBeam(beam);
					}
				}
			});

			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<div ref={containerRef} className="absolute inset-0 -z-10">
			<canvas
				ref={canvasRef}
				className="w-full h-full"
				aria-hidden="true"
			/>
		</div>
	);
}
