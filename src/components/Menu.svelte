<script>
	import { AppBar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { getContext } from 'svelte';
	import { Icon, ChatBubbleOvalLeft, DocumentText, Cog6Tooth } from 'svelte-hero-icons';
	import { db } from '$lib/db';

	let state = getContext('state');

	function changeTitle() {
		if ($state.tab === 'chat') {
			db.chats.update($state.currentTabItem, { name: $state.title });
		} else {
			db.prompts.update($state.currentTabItem, { name: $state.title });
		}
	}
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
			<RadioItem
				bind:group={$state.tab}
				name="justify"
				class="flex"
				value="chat"
				on:click={() => {
					$state.currentTabItem = -1;
					$state.title = 'Unknown';
				}}
			>
				<Icon src={ChatBubbleOvalLeft} class="w-6 h-6 pr-1" />
				Chat
			</RadioItem>
			<RadioItem
				bind:group={$state.tab}
				name="justify"
				class="flex"
				value="prompt"
				on:click={() => {
					$state.currentTabItem = -1;
					$state.title = 'Unknown';
				}}
			>
				<Icon src={DocumentText} class="w-6 h-6 pr-1" />
				Prompt
			</RadioItem>
		</RadioGroup>
	</svelte:fragment>
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">{$state.tab}</div>
		<input type="text" placeholder="Title" bind:value={$state.title} on:change={changeTitle} />
	</div>
	<svelte:fragment slot="trail">
		<button type="button" class="btn-icon variant-filled"
			><Icon src={Cog6Tooth} class="w-6 h-6" /></button
		>
	</svelte:fragment>
</AppBar>
