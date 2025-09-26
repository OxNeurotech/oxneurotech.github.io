<script lang="ts">
	export let href: string;
	export { className as class };
	let className: string;
</script>

{#if href}
	<a {href} target="_blank" aria-label="GitHub" class="contents">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 20 20"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="transition duration-500 hover:stroke-mint-tulip-500 {className}"
		>
			<title>Open</title>
			<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  			<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
		</svg>
	</a>
{/if}
