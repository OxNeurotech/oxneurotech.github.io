<script lang="ts">
	import { onMount } from 'svelte';

	type Point = { x: number; y: number };
	type NetworkNode = Point & { radius: number };
	type Edge = { from: number; to: number };

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (reducedMotion.matches) return;

		const context = canvas.getContext('2d');
		if (!context) return;
		const staticCanvas = document.createElement('canvas');
		const staticContext = staticCanvas.getContext('2d');
		if (!staticContext) return;

		const nodes: NetworkNode[] = [];
		const edges: Edge[] = [];
		let activations = new Float32Array();
		const activationRadius = 250;
		let pointerPoint: Point | null = null;
		let pointerGlow = 0;
		let targetGlow = 0;
		let animationFrame = 0;
		let isAnimating = false;
		let canvasWidth = 0;
		let canvasHeight = 0;

		const buildNetwork = () => {
			nodes.length = 0;
			edges.length = 0;

			const spacing = 124;
			const columns = Math.ceil(canvasWidth / spacing) + 2;
			const rows = Math.ceil(canvasHeight / spacing) + 2;

			for (let row = 0; row < rows; row += 1) {
				for (let column = 0; column < columns; column += 1) {
					nodes.push({
						x: (column - 0.5) * spacing + (Math.random() - 0.5) * 88,
						y: (row - 0.5) * spacing + (Math.random() - 0.5) * 88,
						radius: 1.5 + Math.random() * 2.2
					});
				}
			}

			for (let index = 0; index < nodes.length; index += 1) {
				const nearby = nodes
					.map((node, candidate) => ({
						candidate,
						distance: Math.hypot(node.x - nodes[index].x, node.y - nodes[index].y)
					}))
					.filter(({ candidate, distance }) => candidate > index && distance < 184)
					.sort((a, b) => a.distance - b.distance)
					.slice(0, 2);

				for (const { candidate } of nearby) {
					if (Math.random() > 0.2 || nearby.length === 1) {
						edges.push({ from: index, to: candidate });
					}
				}
			}

			activations = new Float32Array(nodes.length);
		};

		const drawStaticNetwork = () => {
			staticContext.clearRect(0, 0, canvasWidth, canvasHeight);
			staticContext.lineCap = 'round';
			staticContext.strokeStyle = 'rgba(56, 189, 248, 0.018)';
			staticContext.lineWidth = 0.7;
			staticContext.beginPath();
			for (const edge of edges) {
				const from = nodes[edge.from];
				const to = nodes[edge.to];
				staticContext.moveTo(from.x, from.y);
				staticContext.lineTo(to.x, to.y);
			}
			staticContext.stroke();

			staticContext.fillStyle = 'rgba(186, 230, 253, 0.035)';
			for (const node of nodes) {
				staticContext.beginPath();
				staticContext.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
				staticContext.fill();
			}
		};

		const resize = () => {
			const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
			const bounds = canvas.getBoundingClientRect();
			canvasWidth = bounds.width;
			canvasHeight = bounds.height;
			canvas.width = Math.round(canvasWidth * pixelRatio);
			canvas.height = Math.round(canvasHeight * pixelRatio);
			staticCanvas.width = canvas.width;
			staticCanvas.height = canvas.height;
			context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
			staticContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
			buildNetwork();
			drawStaticNetwork();
			draw();
		};

		const activationAt = (point: Point) => {
			if (!pointerPoint) return 0;
			const distance = Math.hypot(point.x - pointerPoint.x, point.y - pointerPoint.y);
			return Math.pow(Math.max(0, 1 - distance / activationRadius), 1.7) * pointerGlow;
		};

		const draw = () => {
			context.clearRect(0, 0, canvasWidth, canvasHeight);
			context.drawImage(staticCanvas, 0, 0, canvasWidth, canvasHeight);
			if (!pointerPoint || pointerGlow < 0.01) {
				isAnimating = false;
				return;
			}

			for (let index = 0; index < nodes.length; index += 1) {
				activations[index] = activationAt(nodes[index]);
			}

			context.lineCap = 'round';
			context.globalCompositeOperation = 'lighter';

			for (const edge of edges) {
				const from = nodes[edge.from];
				const to = nodes[edge.to];
				const activation = Math.max(activations[edge.from], activations[edge.to]);
				if (activation < 0.015) continue;

				context.strokeStyle = `rgba(56, 189, 248, ${activation * 0.68})`;
				context.lineWidth = 0.7 + activation * 1.5;
				context.beginPath();
				context.moveTo(from.x, from.y);
				context.lineTo(to.x, to.y);
				context.stroke();
			}

			for (let index = 0; index < nodes.length; index += 1) {
				const node = nodes[index];
				const activation = activations[index];
				if (activation < 0.015) continue;
				context.fillStyle = `rgba(186, 230, 253, ${activation * 0.92})`;
				context.beginPath();
				context.arc(node.x, node.y, node.radius + activation * 1.5, 0, Math.PI * 2);
				context.fill();
			}

			context.globalCompositeOperation = 'source-over';
			pointerGlow += (targetGlow - pointerGlow) * 0.2;
			if (Math.abs(targetGlow - pointerGlow) > 0.01) {
				animationFrame = requestAnimationFrame(draw);
			} else {
				pointerGlow = targetGlow;
				isAnimating = false;
			}
		};

		const requestDraw = () => {
			if (isAnimating) return;
			isAnimating = true;
			animationFrame = requestAnimationFrame(draw);
		};

		const handlePointerMove = (event: PointerEvent) => {
			if (event.pointerType === 'touch') return;

			const bounds = canvas.getBoundingClientRect();
			pointerPoint = {
				x: event.clientX - bounds.left,
				y: event.clientY - bounds.top
			};
			targetGlow = 1;
			pointerGlow = 1;
			requestDraw();
		};

		const resetPointer = () => {
			targetGlow = 0;
			requestDraw();
		};

		resize();
		window.addEventListener('resize', resize);
		window.addEventListener('pointermove', handlePointerMove, { passive: true });
		window.addEventListener('pointerleave', resetPointer);

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener('resize', resize);
			window.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('pointerleave', resetPointer);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none fixed inset-0 z-[5] h-screen w-screen"
	aria-hidden="true"
></canvas>
