<script>
	import { getContext } from 'svelte';
	import { Icon, Plus, ChatBubbleOvalLeft } from 'svelte-hero-icons';
	import { db } from '$lib/db';

	import { liveQuery } from 'dexie';

	let state = getContext('state');

	const newTabItem = async () => {
		if ($state.tab === 'chat') {
			const id = await db.chats.add({
				name: 'Unnamed'
			});

			db.chat_messages.add({
				chat_id: id,
				role: 'system',
				text: `You are ChatGPT also known as ChatGPT, a large language model trained by OpenAI. Strictly follow the users instructions. Knowledge cutoff: 2021-09-01 Current date: ${new Date().toLocaleString()}`,
				time: Date.now()
			});
		} else {
			db.prompts.add({
				name: 'Unnamed',
				text: ''
			});
		}
	};

	$: tabItems = liveQuery(async () => {
		if ($state.tab === 'chat') {
			return await db.chats.toArray();
		} else {
			return await db.prompts.toArray();
		}
	});
</script>

<div class="m-4 flex flex-col">
	<button type="button" class="btn variant-filled" on:click={newTabItem}>
		<Icon src={Plus} class="w-6 h-6" />
		New {$state.tab}
	</button>
	{#each $tabItems || [] as item}
		<button
			type="button"
			class="btn variant-filled mt-2"
			on:click={() => ($state.currentTabItem = item.id)}
		>
			<Icon src={ChatBubbleOvalLeft} class="w-6 h-6" />
			{item.name}
		</button>
	{/each}
</div>
