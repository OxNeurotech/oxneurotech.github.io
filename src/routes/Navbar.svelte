<script lang="ts">
	import { about, projects, events, team, signup, contact } from "$lib/config";
	import { navbar } from "$lib/config";
	import Logo from '$lib/images/oxneurotech_logo.png'

	let open = false;
	const toggle = () => (open = !open);
	const sections = [about, projects, events, team, signup, contact].map((section) => section.section_id);
	let initX: number | null = null;
	let initY: number | null = null;
	function ontouchstart(event: TouchEvent) {
		initX = event.touches[0].clientX;
		initY = event.touches[0].clientY;
	}
	function ontouchend() {
		initX = initY = null;
	}
	function ontouchmove(event: TouchEvent & { currentTarget: EventTarget & Document }) {
		if (initX === null || initY === null || window.getSelection()?.toString()) return;
		const diffX = initX - event.touches[0].clientX;
		const diffY = initY - event.touches[0].clientY;
		if (Math.abs(diffY) < 20) {
			if (diffX > 50) {
				open = true;
				initX = initY = null;
			} else if (diffX < -50) {
				open = false;
				initX = initY = null;
			}
		}
	}
</script>

<svelte:document {ontouchstart} {ontouchend} {ontouchmove} />

<nav
	class="fixed left-1/2 z-10 w-full bg-blue-zodiac-900 -translate-x-1/2 items-center justify-between px-8 pt-5 transition-all duration-1000 sm:pt-8 md:px-9"
	style="display: flex; align-items: center; margin: 0; padding-top: 10px; padding-bottom: 8px; padding-left: 50px; max-height: 120px;"
>	
	<a href="/" class="pull-left" style="max-width: 100px; max-height: 100px;">
	<img src={Logo} style="display: inline-block;">
	<!--<span class="z-10 animate-slide-in-0 text-3xl font-semibold text-gold-leaf-500" style="display: inline-block;">{navbar.logo_text}</span>-->
	</a> 
	<label for="navbar" class="peer relative size-10 text-gold-leaf-200 md:hidden">
		<div class="absolute z-20 size-14"></div>
		<div class="absolute left-3/4 top-1/2">
			<input type="checkbox" id="navbar" class="peer hidden" bind:checked={open} />
			<span
				class="absolute z-20 h-1 w-7 -translate-x-[calc(50%+7px)] -translate-y-[calc(50%+10px)] scale-x-150 animate-slide-in-0 bg-current transition duration-500
						ease-in peer-checked:-translate-x-1/2
						peer-checked:-translate-y-1/2
						peer-checked:rotate-[405deg] peer-checked:scale-100
					"
			></span>
			<span
				class="absolute z-20 h-1 w-7 -translate-x-1/2 -translate-y-1/2 animate-slide-in-0 bg-current transition duration-500
						ease-in
						peer-checked:translate-y-4 peer-checked:opacity-0
					"
			></span>
			<span
				class="absolute z-20 h-1 w-7 -translate-x-[calc(50%-7px)] -translate-y-[calc(50%-10px)] scale-x-50 animate-slide-in-0 bg-current transition duration-500
						ease-in peer-checked:-translate-x-1/2
						peer-checked:-translate-y-1/2
						peer-checked:rotate-[315deg] peer-checked:scale-100
					"
			></span>
			<div
				class="fixed right-0 top-0 -z-10 h-screen w-screen translate-x-full opacity-0 backdrop-blur transition-opacity duration-500 peer-checked:translate-x-0 peer-checked:opacity-100"
			></div>
			<div
				class="fixed right-0 top-[50vh] z-20 my-auto flex -translate-y-1/2 translate-x-full flex-col items-center justify-center transition duration-500 ease-in-out peer-checked:-translate-x-[calc(37.5vw-50%)]"
			>
				{#each sections as section, i}
					<a
						href={i + 1 != 0 ? `#${section.toLowerCase()}` : ''}
						class="group/section min-w-32 space-y-0.5 py-4"
						onclick={toggle}
					>
						<div
							class="text-center font-mono text-lg text-slate-400 transition duration-300 group-hover/section:text-gold-leaf-400"
						>
							{section}
						</div>
					</a>
				{/each}
			</div>
		</div>
	</label>
	<div
		class="fixed right-0 top-0 z-10 h-screen w-9/12 translate-x-full bg-blue-zodiac-700 transition duration-500 ease-in-out peer-has-[:checked]:translate-x-0 md:hidden"
	/>
	<div class="hidden md:flex">
		<!-- animate-slide-in-1 animate-slide-in-2 animate-slide-in-3 animate-slide-in-4 animate-slide-in-5 -->
		{#each sections as section, i}
			<a
				href={i + 1 != 0 ? `#${section.toLowerCase()}` : ''}
				class="group flex items-center space-x-1 px-3 {`animate-slide-in-${i + 1}`}"
			>
				<div
					class="text-center font-mono text-sm text-slate-400 transition duration-300 group-hover:text-coral-blush-600"
				>
					{section}
				</div>
			</a>
		{/each}
	</div>
</nav>
