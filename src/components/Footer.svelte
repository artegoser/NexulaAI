<script>
	import { getContext } from 'svelte';
	import { Icon, PaperAirplane } from 'svelte-hero-icons';

	import { getResponse } from '$lib/chat';
	import { db } from '$lib/db';

	let state = getContext('state');

	$: addMessage = async () => {
		if ($state.tab === 'chat') {
			await db.chat_messages.add({
				chat_id: $state.currentTabItem,
				role: 'user',
				content: $state.text,
				time: Date.now()
			});

			$state.text = '';

			await db.chat_messages.add({
				chat_id: $state.currentTabItem,
				role: 'assistant',
				content: await getResponse(
					await db.chat_messages.where('chat_id').equals($state.currentTabItem).toArray(),
					$state.model
				),
				time: Date.now()
			});
		}
	};
</script>

<div class="m-4">
	{#if $state.currentTabItem !== -1}
		{#if $state.tab == 'chat'}
			<div class="flex flex-row">
				<div class="basis-1/4" />
				<div class="basis-1/2 flex items-start">
					<textarea
						class="textarea"
						rows="2"
						placeholder="Send a message."
						bind:value={$state.text}
					/>
					<button type="button" class="btn variant-filled m-2" on:click={addMessage}>
						Send <Icon src={PaperAirplane} class="w-6 h-6 m-2" />
					</button>
				</div>
				<div class="basis-1/4" />
			</div>
		{:else}
			<div class="flex flex-row justify-items-center">
				<div class="basis-2/5" />
				<button type="button" class="btn variant-filled m-2 basis-1/5 hover:basis-1/2 duration-500">
					Send <Icon src={PaperAirplane} class="w-6 h-6 m-2" />
				</button>
				<div class="basis-2/5" />
			</div>
		{/if}
	{/if}
</div>
