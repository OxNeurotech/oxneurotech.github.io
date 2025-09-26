<script lang="ts">
	import { contact } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={contact.section_title} id={contact.section_id} sectionNumber="6">
	{#each contact.paragraphs as paragraph}
		<p>{@html paragraph}</p>
	{/each}
	
	<slot></slot>
</Section>
