<script lang="ts">
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
	import { Icon, Plus } from 'svelte-hero-icons';
	let currentTile = 0;

	export let tab: string;
	export let title: string;
</script>

<div class="m-4">
	<button type="button" class="btn variant-filled">
		<Icon src={Plus} class="w-6 h-6" />
		New {tab}
	</button>
</div>
