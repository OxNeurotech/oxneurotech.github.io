<script>
	import { socials } from '$lib/config';
	import Linkedin from '$lib/svg/Linkedin.svelte';
	import Github from '$lib/svg/Github.svelte';
	import Mail from '$lib/svg/Mail.svelte';
	import Logo from '$lib/images/oxneurotech_logo.png'
</script>

<div class="observe mx-auto mb-14 w-fit">
	<div class="mb-2 flex h-6 justify-evenly md:pointer-events-none md:opacity-0">
		<Linkedin href={socials.linkedin} />
		<Github href={socials.github} />
		<Mail href={socials.mail} />
	</div>
	<div>
	<!--<img src={Logo} style="display: inline-block; max-width: 60px;" alt="Logo"> &emsp;-->
	© OxNeurotech 2025
	</div>
</div>

<div class="hidden md:block">
	<div
		class="fixed bottom-0 left-6 flex w-6 animate-slide-left flex-col items-center justify-evenly gap-5 xl:left-14"
	>
		<Linkedin href={socials.linkedin} class="transition hover:-translate-y-1" />
		<Github href={socials.github} class="transition hover:-translate-y-1" />
		<Mail href={socials.mail} class="transition hover:-translate-y-1" />
		<div class="mx-auto h-24 w-1 rounded bg-slate-500"></div>
	</div>
	<div
		class="fixed bottom-0 right-6 flex animate-slide-right flex-col items-center justify-evenly gap-5 xl:right-14"
	>
		<div class="inline-block font-mono [writing-mode:vertical-lr]">{socials.text_on_right}</div>
		<div class="mx-auto h-24 w-1 rounded bg-slate-500"></div>
	</div>
</div>