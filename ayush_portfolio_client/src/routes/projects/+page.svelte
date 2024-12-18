<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const { data } = $props();
	let projects = data.data;
	let visible = $state(false);
	console.log(data);

	onMount(async () => {
		visible = true;
	});
</script>

<div class="grid w-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-1">
	{#each projects as project, i}
		{#if visible}
			<div
				class="card w-full rounded bg-base-100 p-3 shadow-xl"
				in:fly={{ x: -100, duration: 1000, delay: i * 100 }}
			>
				<figure class="h-full w-full items-center">
					<img
						src={project.imageName ? project.imageName : '/images/comming_soon.jpg'}
						alt={project.title}
						class="h-full w-full items-center"
					/>
				</figure>
				<h2 class="card-title mb-2">
					<a href="/projects/{project.fileName}">{project.title}</a>
				</h2>
				<p>{project.description}</p>
			</div>
		{/if}
	{/each}
</div>
