<script>
	import { fade } from 'svelte/transition';

	const data = {};
</script>

<div class="card h-full w-full bg-base-100 shadow-xl" in:fade={{ delay: 200 }}>
	<div class="card-body">
		<div class="card-body">
			<h2 class="card-title">{data?.contact?.title}</h2>
			<div>
				<label class="form-control max-w-xs">
					<div class="label">
						<span class="label-text">Name.</span>
					</div>
					<input type="text" class="input input-bordered input-primary w-full" />
				</label>
			</div>
			<label class="form-control max-w-md">
				<div class="label">
					<span class="label-text">Email.</span>
				</div>
				<input type="email" class="input input-bordered input-primary w-full" />
			</label>

			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Message.</span>
				</div>
				<textarea class="textarea textarea-primary" rows="10"></textarea>
			</label>
			<div class="card-actions mt-6 justify-start">
				<button class="btn btn-primary">Submit</button>
			</div>
		</div>
	</div>
</div>
