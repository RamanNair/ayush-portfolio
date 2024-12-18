<script>
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const { data } = $props();
	const project = data.data;
	console.log(project);
</script>

<div class="card !flex h-full rounded-none bg-base-100 shadow-xl md:!flex-row">
	<figure class="h-full flex-1">
		<img
			src={project.imageName ? project.imageName : '/images/comming_soon.jpg'}
			alt={project.title}
			class="h-full"
		/>
	</figure>
	<div class="card-body flex-1">
		<h2 class="card-title">{project.title}</h2>
		<div>
			<div>{project.description}</div>
		</div>

		<div class="card-actions justify-end">
			<button class="btn btn-primary" onclick={() => goto('/projects')}>Back</button>
		</div>
	</div>
</div>
