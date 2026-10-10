<script lang="ts">
	import { contact } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={contact.section_title} id={contact.section_id} sectionNumber="6">
	{#each contact.paragraphs as paragraph}
		<p>{@html paragraph}</p>
	{/each}

	<div
		data-socials-destination
		class="hidden h-6 grid-cols-[7rem_7rem_7rem] gap-6 md:grid"
		aria-hidden="true"
	>
		<div data-social-destination></div>
		<div data-social-destination></div>
		<div data-social-destination></div>
	</div>
	
	<slot></slot>
</Section>
