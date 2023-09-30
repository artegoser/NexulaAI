<script lang="ts">
	import '../app.postcss';
	import Menu from '../components/Menu.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../components/Sidebar.svelte';

	let title = 'Unknown';
	let tab = 'chat';
</script>

<AppShell>
	<svelte:fragment slot="header"><Menu bind:tab bind:title /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="border-r-2 border-gray-400">
			<Sidebar bind:tab bind:title />
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
