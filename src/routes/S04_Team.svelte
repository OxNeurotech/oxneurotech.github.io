<script lang="ts">
	import { team } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={team.section_title} id={team.section_id} sectionNumber="4">
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each team.list as { img_ref, role, name, about, social }}
			<div class="relative flex rounded bg-white/5 before:block before:pt-[100%]">
				<div class="flex flex-col justify-between gap-6 p-[7%]">
				<div class="group relative mx-auto mb-auto flex max-h-80 max-w-80 justify-center" style="min-width: 200px; min-height: 200px;">
					
					<div
						class="absolute -z-10 size-full translate-x-3 translate-y-3 rounded border-4 border-coral-blush-500
						transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
					/>
					<a href={social} target="_blank">
					<div class="transition-color absolute size-full rounded bg-gold-leaf-200 mix-blend-multiply duration-500 ease-out group-hover:bg-white" />
						<img src={img_ref} class="rounded" style="max-height: 220px; max_width: 220px; min-width: 150px; min-height: 150px;" alt="Portrait" />
					</div>
					<div class="text-2xl font-bold text-slate-100 transition-all duration-500">
						{role}
					</div>
					<p class="truncate text-wrap text-slate-200">{name} | {about}</p>
				</div>
			</div>
		{/each}
	</div>
</Section>
