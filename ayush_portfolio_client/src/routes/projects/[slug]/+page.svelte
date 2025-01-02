<script>
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const { data } = $props();
	const project = data.data;
	const apiUrl = import.meta.env.VITE_API_URL;

	console.log(project);
</script>

<!-- <div class="card !flex h-full rounded-none bg-base-100 shadow-xl md:!flex-row">
	<figure class="h-full flex-1">
		<img
		src={project.imageName
			? `http://localhost:3000/api/project/resizeimage800/${project.imageName}`
			: 'comming_soon.jpg'}
		alt=""
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
</div> -->

<div class="h-full">  
    <div class="flex flex-col md:flex-row  rounded  shadow-lg h-full p-3">
	  <img
	  src={project.imageName
		  ? `${apiUrl}/project/resizeimage800/${project.imageName}`
		  : 'comming_soon.jpg'}
	  alt=""
	  class="flex-1"
  />

	  <div class="px-6 py-4 flex-1">
		<div>
			<div class="font-bold text-xl mb-2">{project.title}</div>
			<p class="text-gray-700 text-base">
			 {project.description}
					 </p>
	
		</div>
		<div class="pt-4 pb-2">
			<span class="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
				<a href="/projects">Back</a></span>
		</div>
	



	</div>
    </div>
  </div>