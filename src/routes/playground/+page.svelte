<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import { liveQuery } from 'dexie';
	import { getContext } from 'svelte';

	import { db } from '$lib/db';
	import ChatBubble from '../../components/chatBubble.svelte';

	let state = getContext('state');

	$: data = liveQuery(async () => {
		if ($state.tab === 'chat') {
			return await db.chat_messages.where('chat_id').equals($state.currentTabItem).toArray();
		} else {
			return [await db.prompts.get($state.currentTabItem)];
		}
	});
</script>

<div class="container h-full mx-auto flex items-center">
	<div class="space-y-5 m-4">
		{#if $state.tab === 'chat'}
			{#each $data || [] as item}
				{#if item}
					<ChatBubble role={item.role} time={item.time} message={item.text} />
				{/if}
			{/each}
		{:else}
			<textarea class="textarea w-full h-full grow" placeholder="Type some text." value="" />
		{/if}
	</div>
</div>
