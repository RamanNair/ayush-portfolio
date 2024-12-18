<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-col bg-indigo-50">
	<Header />
	<div class="flex flex-1 overflow-auto max-sm:flex-col">
		<Navigation />
		<div class="flex-1 overflow-auto px-12 py-6">
			{@render children()}
		</div>
	</div>
	<Footer />
</div>
