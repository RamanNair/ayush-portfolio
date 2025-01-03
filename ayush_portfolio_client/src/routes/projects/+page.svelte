<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const { data } = $props();
	let projects = data.data;
	let visible = $state(false);
	const apiUrl = import.meta.env.VITE_API_URL;

	console.log(data);

	onMount(async () => {
		visible = true;
	});
</script>

<div class="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-5">
	{#each projects as project, i}
		{#if visible}
			<div class="flex flex-col aspect-square overflow-hidden rounded shadow-lg hover:scale-110 duration-200  border-gray-200 p-3 border backdrop-filter backdrop-blur-md bg-opacity-10 bg-white"
			in:fly={{ x: -100, duration: 1000, delay: i * 100 }}>
				<div class="h-1/2 flex justify-center">
					<img
						src={project.imageName
							? `${apiUrl}/project/resizeimage/${project.imageName}`
							: 'comming_soon.jpg'}
						alt=""
						class="h-full"
					/>
				</div>

				<div class="px-6 py-4">
					<div class="mb-2 text-xl font-bold">
						<a href="/projects/{project.fileName}">{project.title}</a>
					</div>
					<p class="text-base">
						{project.description}
					</p>
				</div>
			</div>

			<!-- <div class="bg-gradient-to-r from-blue-300 to-purple-500 h-screen flex justify-center items-center"> -->
				<!-- <div class="py-8 px-6 max-w-md bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
					<h1 class="text-3xl font-extrabold text-center text-gray-800 mb-5">Glassmorphism Design</h1>
					<p class="text-lg text-center text-gray-700 mb-8">Using Tailwind CSS</p>
					<form class="flex flex-col">
						<div class="mb-5">
							<label class="text-gray-700 font-semibold mb-2" for="name">Name</label>
							<input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="text" id="name" name="name" required>
						</div>
						<div class="mb-5">
							<label class="text-gray-700 font-semibold mb-2" for="email">Email</label>
							<input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="email" id="email" name="email" required>
						</div>
						<div class="mb-5">
							<label class="text-gray-700 font-semibold mb-2" for="message">Message</label>
							<textarea class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" id="message" name="message" rows="5" required></textarea>
						</div>
						<button class="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5" type="submit">Send Message</button>
					</form>
				</div> -->
			<!-- </div> -->
		{/if}
	{/each}
</div>

<!-- <div class="grid w-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2">
	{#each projects as project, i}
		{#if visible} -->
<!-- <div
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
			</div> -->

<!-- <div class="rounded overflow-hidden shadow-lg" in:fly={{ x: -100, duration: 1000, delay: i * 100 }}>
				<img src={project.imageName ? `http://localhost:3000/api/project/resizeimage/${project.imageName}`:'comming_soon.jpg'} alt="" class=" h-1/2 w-full">
				<div class="px-6 py-4">
				  <div class="font-bold text-xl mb-2"><a href="/projects/{project.fileName}">{project.title}</a></div>
				  <p class="text-gray-700 text-base">
					{project.description}
				  </p>
				</div>
			  </div>
		{/if}
	{/each}
</div> -->
