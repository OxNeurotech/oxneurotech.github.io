<script lang="ts">
	import { events } from '$lib/config';
	import Newtab from '$lib/svg/Newtab.svelte';
	import Section from './Section.svelte';
</script>

<Section title={events.section_title} id={events.section_id} sectionNumber="3">
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each events.list as { title, points, tools, href }}
			<div class="relative flex rounded bg-white/5 before:block before:pt-[100%]">
				<div class="flex flex-col justify-between gap-6 p-[7%]">
					<div
						class="text-2xl font-bold text-slate-300 transition-all duration-500 hover:text-pale-sky-500"
					>
						{title}
					</div>
					{#each points as point}
						<p class="truncate text-wrap">{point}</p>
					{/each}
					<div class="flex flex-wrap gap-2 text-sm leading-none">
						{#each tools as tool}
							<div class="transition-all duration-500 hover:text-blue-zodiac-100">{tool}</div>
						{/each}
					</div>
					<div class="size-7">
						<Newtab {href} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>
