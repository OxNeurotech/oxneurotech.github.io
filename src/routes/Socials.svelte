<script lang="ts">
	import { socials } from '$lib/config';
	import Linkedin from '$lib/svg/Linkedin.svelte';
	import Github from '$lib/svg/Github.svelte';
	import Mail from '$lib/svg/Mail.svelte';

	let movingSocials: HTMLDivElement;

	$effect(() => {
		if (!movingSocials) return;

		const destination = document.querySelector<HTMLElement>('[data-socials-destination]');
		const links = Array.from(movingSocials.querySelectorAll<HTMLElement>('[data-moving-social]'));
		if (!destination || links.length === 0) return;

		let animationFrame = 0;

		const update = () => {
			animationFrame = 0;
			const destinationRect = destination.getBoundingClientRect();
			const start = window.innerHeight * 1.25;
			const finish = window.innerHeight * 0.95;
			const progress = Math.min(1, Math.max(0, (start - destinationRect.top) / (start - finish)));
			const destinationSlots = Array.from(
				destination.querySelectorAll<HTMLElement>('[data-social-destination]')
			);

			movingSocials.style.setProperty('--social-progress', progress.toString());
			movingSocials.style.setProperty('--social-width', `${24 + 88 * progress}px`);
			movingSocials.style.setProperty('--label-shift', `${-8 * (1 - progress)}px`);
			movingSocials.style.setProperty('--rail-shift', `${96 * progress}px`);

			links.forEach((link, index) => {
				const destinationSlot = destinationSlots[index];
				if (!destinationSlot) return;

				const destinationSlotRect = destinationSlot.getBoundingClientRect();
				const startX = window.innerWidth >= 1280 ? 56 : 24;
				const startY = window.innerHeight - 228 + index * 44;
				const x = startX + (destinationSlotRect.left - startX) * progress;
				const y = startY + (destinationSlotRect.top - startY) * progress;

				link.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			});
		};

		const requestUpdate = () => {
			if (!animationFrame) animationFrame = requestAnimationFrame(update);
		};

		update();
		window.addEventListener('scroll', requestUpdate, { passive: true });
		window.addEventListener('resize', requestUpdate);

		return () => {
			window.removeEventListener('scroll', requestUpdate);
			window.removeEventListener('resize', requestUpdate);
			if (animationFrame) cancelAnimationFrame(animationFrame);
		};
	});
</script>

<div class="observe mx-auto mb-14 w-fit">
	<div class="mb-2 flex h-6 justify-evenly md:pointer-events-none md:opacity-0">
		<Linkedin href={socials.linkedin} />
		<Github href={socials.github} />
		<Mail href={socials.mail} />
	</div>
	<div>
	<!--<img src={Logo} style="display: inline-block; max-width: 60px;" alt="Logo"> &emsp;-->
	© OxNeurotech 2026
	</div>
</div>

<div class="hidden md:block">
	<div
		bind:this={movingSocials}
		class="pointer-events-none fixed inset-0 z-20"
		style="--social-progress: 0; --social-width: 24px; --label-shift: -8px; --rail-shift: 0px;"
	>
		<div data-moving-social class="moving-social pointer-events-auto">
			<Linkedin href={socials.linkedin} />
			<a href={socials.linkedin} target="_blank">LinkedIn</a>
		</div>
		<div data-moving-social class="moving-social pointer-events-auto">
			<Github href={socials.github} />
			<a href={socials.github} target="_blank">GitHub</a>
		</div>
		<div data-moving-social class="moving-social pointer-events-auto">
			<Mail href={socials.mail} />
			<a href={socials.mail} target="_blank">Email</a>
		</div>
		<div class="social-rail fixed bottom-0 left-6 h-24 w-1 rounded bg-slate-500 xl:left-14"></div>
	</div>
	<div
		class="fixed bottom-0 right-6 flex animate-slide-right flex-col items-center justify-evenly gap-5 xl:right-14"
	>
		<div class="inline-block font-mono [writing-mode:vertical-lr]">{socials.text_on_right}</div>
		<div class="mx-auto h-24 w-1 rounded bg-slate-500"></div>
	</div>
</div>

<style>
	.moving-social {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		height: 24px;
		width: var(--social-width);
		align-items: center;
		gap: 8px;
		overflow: hidden;
		white-space: nowrap;
		will-change: transform, width;
	}

	.moving-social :global(svg) {
		width: 24px;
		height: 24px;
		flex: 0 0 24px;
	}

	.moving-social > a {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		opacity: var(--social-progress);
		transform: translateX(var(--label-shift));
		transition: color 200ms ease;
	}

	.moving-social > a:hover {
		color: rgb(251 113 133);
	}

	.social-rail {
		opacity: calc(1 - var(--social-progress));
		transform: translateY(var(--rail-shift));
	}
</style>
