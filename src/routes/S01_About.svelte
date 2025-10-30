<script lang="ts">
	import { about } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={about.section_title} id={about.section_id} sectionNumber="1">
	<div class="grid grid-cols-1 gap-7 md:grid-cols-2">
		<div class="space-y-6">
			{#each about.paragraphs as paragraph}
				<p>{@html paragraph}</p>
			{/each}

			<ul class="my-5 grid grid-cols-2 gap-2">
				{#each about.services as item}
					<li class="truncate text-nowrap before:pr-2 before:text-coral-blush-600 before:content-['▹']" >
						{item}
					</li>
				{/each}
			</ul>
		</div>
		
		<div class="mx-5">
		<div class="translate-y h-1 w-full bg-coral-blush-700"></div>
			<div class="group relative translate-y-3 mx-auto mb-auto flex max-h-180 max-w-180 justify-center">
			<enhanced:img src="$lib/images/group-meeting-jun2023.jpg" class="rounded" alt="Portrait" />
		</div>
		<div class="translate-y-6 h-1 w-full bg-pale-sky-700"></div>
	</div>
</Section>
