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
</div>
