<script lang="ts">
	import { team } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={team.section_title} id={team.section_id} sectionNumber="4">
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each team.list as { img_ref, role, name, about, social }}
			<div class="relative flex rounded bg-white/5 before:block before:pt-[100%]">
				<div class="flex flex-col gap-4 p-[7%]">
					<div
						class="group relative mx-auto flex max-h-80 max-w-80 justify-center"
						style="min-width: 200px; min-height: 200px;"
					>
						<div
							class="absolute -z-10 size-full translate-x-3 translate-y-3 rounded border-4 border-coral-blush-500
							transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
						/>
						<svelte:element this={social ? 'a' : 'div'} href={social || undefined} target={social ? '_blank' : undefined}>
							<div
								class="transition-color absolute size-full rounded bg-gold-leaf-200 mix-blend-multiply duration-500 ease-out group-hover:bg-white"
							/>
							<img
								src={img_ref}
								class="rounded"
								style="max-height: 220px; max_width: 220px; min-width: 150px; min-height: 150px;"
								alt="Portrait"
							/>
						</svelte:element>
					</div>
					<div class="min-h-16 text-2xl font-bold text-slate-100 transition-all duration-500">
						{role}
					</div>
					<p class="truncate text-wrap text-slate-200">{name} | {about}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Senior Committee: hidden for now, to be reintegrated in a later pass.
	     The roster itself still lives in `team.senior_list` in $lib/config.ts.

	<div class="mt-10 flex items-center gap-3 text-nowrap font-mono">
		<div class="h-0.5 w-full bg-slate-500"></div>
		<span class="text-lg font-semibold text-slate-300">{team.senior_title}</span>
		<div class="h-0.5 w-full bg-slate-500"></div>
	</div>

	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each team.senior_list as { img_ref, role, name, about, social }}
			<div class="relative flex rounded bg-white/5 before:block before:pt-[100%]">
				<div class="flex flex-col gap-4 p-[7%]">
					<div
						class="group relative mx-auto flex max-h-80 max-w-80 justify-center"
						style="min-width: 200px; min-height: 200px;"
					>
						<div
							class="absolute -z-10 size-full translate-x-3 translate-y-3 rounded border-4 border-coral-blush-500
							transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
						/>
						<svelte:element this={social ? 'a' : 'div'} href={social || undefined} target={social ? '_blank' : undefined}>
							<div
								class="transition-color absolute size-full rounded bg-gold-leaf-200 mix-blend-multiply duration-500 ease-out group-hover:bg-white"
							/>
							<img
								src={img_ref}
								class="rounded"
								style="max-height: 220px; max_width: 220px; min-width: 150px; min-height: 150px;"
								alt="Portrait"
							/>
						</svelte:element>
					</div>
					<div class="min-h-16 text-2xl font-bold text-slate-100 transition-all duration-500">
						{role}
					</div>
					<p class="truncate text-wrap text-slate-200">{name} | {about}</p>
				</div>
			</div>
		{/each}
	</div>
	-->
</Section>
