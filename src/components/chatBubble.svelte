<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	/** @type {string} */
	export let role;
	/** @type {number} */
	export let time;
	/** @type {string} */
	export let message;
</script>

<div class="grid grid-cols-[auto_1fr] gap-2">
	<Avatar
		initials={role}
		width="w-12"
		background={role === 'user' ? 'bg-red-600' : 'bg-green-600'}
	/>
	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">{role?.toLocaleUpperCase()}</p>
			<small class="opacity-50">{new Date(time).toLocaleString()}</small>
		</header>
		<p>{message}</p>
	</div>
</div>
