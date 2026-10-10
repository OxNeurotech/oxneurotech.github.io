<script lang="ts">
	import { hi } from "$lib/config";
</script>

<div
	class="flex min-h-screen flex-col justify-center gap-4 py-24 transition-all duration-1000 md:gap-6"
>

	<p
		class="animate-slide-in-1 text-4xl font-bold text-slate-300 transition-all duration-1000 sm:text-5xl md:text-7xl"
	>
		{hi.statement}
	</p>

	<a
		target="_blank"
		href={hi.button.href}
		class="max-w-48 mt-7 animate-slide-in-4 rounded-md border-2 border-coral-blush-500 p-4 text-center font-mono text-coral-blush-500/80 transition-colors duration-500 hover:bg-coral-blush-500/20 hover:text-coral-blush-400"
	>
		{hi.button.text}
	</a>

	<a
		href="/hackathon"
		class="group mt-10 flex max-w-2xl animate-slide-in-5 flex-col gap-3 rounded-lg border-2 border-coral-blush-400 bg-coral-blush-500/10 p-6 transition-colors duration-500 hover:bg-coral-blush-500/20 sm:flex-row sm:items-center sm:justify-between sm:p-8"
	>
		<div>
			<p class="font-mono text-xs font-bold uppercase tracking-[0.26em] text-mint-tulip-300">
				7–8 November 2026 · Oxford
			</p>
			<p class="mt-2 text-3xl font-black text-white sm:text-4xl">Join our hackathon</p>
		</div>
		<span
			class="font-mono text-lg text-coral-blush-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-coral-blush-200"
		>
			Learn more →
		</span>
	</a>
</div>
