<script lang="ts">
	import Navbar from './Navbar.svelte';
	import S00_Landing from './S00_Landing.svelte';
	import S01_About from './S01_About.svelte';
	import S02_Projects from './S02_Projects.svelte';
	import S03_Events from './S03_Events.svelte';
	import S04_Team from './S04_Team.svelte';
	import S05_Signup from './S05_Signup.svelte';
	import S06_Contact from './S06_Contact.svelte';
	import Socials from './Socials.svelte';

	
	$effect(() => {
		const show = (element: Element) => {
			element.classList.remove('opacity-0');
			element.classList.add('animate-slide-in');
		};
		const hide = (element: Element) => {
			element.classList.add('opacity-0');
		};
		
		const observer: IntersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						show(entry.target);
						observer.unobserve(entry.target);
					} else hide(entry.target);
				});
			},
			{
				rootMargin: '-0% 0% -25% 0%'
			}
		);
		const endOfPageObserver = new IntersectionObserver((entries) =>
			entries
				.filter((entry) => entry.isIntersecting)
				.forEach(() => {
					document.querySelectorAll('.observe').forEach((section) => show(section));
				})
		);

		document //
			.querySelectorAll('.observe')
			.forEach((section) => {
				observer.observe(section);
			});
		document //
			.querySelectorAll('.end')
			.forEach((section) => {
				endOfPageObserver.observe(section);
			});

		return () => {
			observer.disconnect();
			endOfPageObserver.disconnect();
		};
	});
</script>

<Navbar />
<S00_Landing />
<S01_About />
<S02_Projects />
<S03_Events />
<S04_Team />
<S05_Signup />
<S06_Contact />
<Socials />
<div class="end h-1" />
