<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import Reality from '$lib/sections/Reality.svelte';
	import Practice from '$lib/sections/Practice.svelte';
	import Perform from '$lib/sections/Perform.svelte';
	import Prove from '$lib/sections/Prove.svelte';
	import Teams from '$lib/sections/Teams.svelte';
	import Finale from '$lib/sections/Finale.svelte';
</script>

<svelte:head>
	<title>Pitch.ai — Every pitch, perfected.</title>
	<meta
		name="description"
		content="AI roleplay. Live call coaching. A profile that gets you discovered."
	/>
</svelte:head>

<main>
	<Hero />
	<Reality />
	<Practice />
	<Perform />
	<Prove />
	<Teams />
	<Finale />
</main>

<style>
	main {
		background: #000;
		min-height: 100vh;
	}
</style>
