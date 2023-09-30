<script>
	import { getContext } from 'svelte';
	import { Icon, Plus } from 'svelte-hero-icons';
	let currentTab = 0;

	let state = getContext('state');
</script>

<div class="m-4">
	<button type="button" class="btn variant-filled">
		<Icon src={Plus} class="w-6 h-6" />
		New {$state.tab}
	</button>
</div>
