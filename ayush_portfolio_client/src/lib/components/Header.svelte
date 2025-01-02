<script>
	import { fade } from 'svelte/transition';
	import Navigation from './Navigation.svelte';
</script>

<header
	class="flex flex-col md:flex-row justify-between border-b-[1px] border-primary bg-white px-12 py-4 text-primary-800"
>
	<p class="anton-regular flex items-center text-3xl">AYUSH PRASHANT NAIR</p>
	<div class="flex items-center gap-5">
		<Navigation/>
	</div>
</header>
