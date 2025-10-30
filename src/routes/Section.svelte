<script lang="ts">
	export let title: string;
	export let id: string;
	export let sectionNumber: string;
</script>

<div class="observe flex flex-col gap-7 py-24" id={id.toLowerCase()}>
	<div class="flex items-center gap-3 text-nowrap font-mono">
		<div class="h-0.5 w-full bg-slate-500"></div>
		<span class="text-xl font-semibold text-slate-300">{title}</span>
		<div class="h-0.5 w-full bg-slate-500"></div>
	</div>
	<slot />
</div>
