<script>
	import Menu from '../../components/Menu.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../../components/Sidebar.svelte';
	import { redirect } from '@sveltejs/kit';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import Footer from '../../components/Footer.svelte';

	if ($page.url.pathname === '/') {
		throw redirect(308, '/playground');
	}

	const state = writable();

	$: state.set({
		title: 'Unknown',
		tab: 'chat',
		text: '',
		currentTabItem: -1,
		model: 'free-gpt-3.5-turbo'
	});

	setContext('state', state);
</script>

<AppShell>
	<svelte:fragment slot="header"><Menu /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="border-r-2 border-gray-400">
			<Sidebar />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
	<slot />
</AppShell>
