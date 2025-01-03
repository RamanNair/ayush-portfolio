<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-col bg-primary-100 bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-cover">
	<Header />
	<div class="flex-1 overflow-auto px-12 py-6">
		{@render children()}
	</div>
	<Footer />
</div>
