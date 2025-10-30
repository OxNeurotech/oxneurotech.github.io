<script lang="ts">
	import { signup } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={signup.section_title} id={signup.section_id} sectionNumber="5">
	{#each signup.paragraphs as paragraph}
		<p>{@html paragraph}</p>
	{/each}
	<a
		target="_blank"
		href={signup.button.href}
		class="mx-auto mt-2 w-fit rounded-md border-2 border-coral-blush-500 p-4 text-center font-mono text-coral-blush-500/80 transition-colors duration-500 hover:bg-coral-blush-500/20 hover:text-coral-blush-400"
	>
		{signup.button.text}
	</a>
	<slot></slot>
</Section>
