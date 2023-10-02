<script>
	import { getContext } from 'svelte';
	import { Icon, Plus, ChatBubbleOvalLeft, DocumentText } from 'svelte-hero-icons';
	import { db } from '$lib/db';

	import { liveQuery } from 'dexie';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let state = getContext('state');

	const newTabItem = async () => {
		if ($state.tab === 'chat') {
			const id = await db.chats.add({
				name: 'Unnamed',
				model: 'free-gpt-3.5-turbo'
			});

			db.chat_messages.add({
				chat_id: id,
				role: 'system',
				content: `You are ChatGPT also known as ChatGPT, a large language model trained by OpenAI. Strictly follow the users instructions. Knowledge cutoff: 2021-09-01 Current date: ${new Date().toLocaleString()}`,
				time: Date.now()
			});
		} else {
			db.prompts.add({
				name: 'Unnamed',
				text: '',
				model: 'free-gpt-3.5-turbo'
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
	<hr class="mt-2" />
	<ListBox>
		{#each $tabItems || [] as item}
			<ListBoxItem
				class="mt-2"
				on:click={() => {
					$state.title = item.name;
					$state.model = item.model;
				}}
				bind:group={$state.currentTabItem}
				value={item.id}
				name={item.name}
			>
				<div class="flex">
					<Icon src={$state.tab === 'chat' ? ChatBubbleOvalLeft : DocumentText} class="w-6 h-6" />
					{item.name === item.name.slice(0, 15) ? item.name : item.name.slice(0, 15) + '...'}
				</div>
			</ListBoxItem>
		{/each}
	</ListBox>
</div>
