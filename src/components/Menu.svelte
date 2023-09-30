<script>
	import { AppBar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { getContext } from 'svelte';
	import { Icon, ChatBubbleOvalLeft, DocumentText, Cog6Tooth } from 'svelte-hero-icons';

	let state = getContext('state');
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
			<RadioItem bind:group={$state.tab} name="justify" class="flex" value="chat">
				<Icon src={ChatBubbleOvalLeft} class="w-6 h-6 pr-1" />
				Chat
			</RadioItem>
			<RadioItem bind:group={$state.tab} name="justify" class="flex" value="prompt">
				<Icon src={DocumentText} class="w-6 h-6 pr-1" />
				Prompt
			</RadioItem>
		</RadioGroup>
	</svelte:fragment>
	NexulaAI - {`${$state.title} ${$state.tab}`}
	<svelte:fragment slot="trail">
		<button type="button" class="btn-icon variant-filled"
			><Icon src={Cog6Tooth} class="w-6 h-6" /></button
		>
	</svelte:fragment>
</AppBar>
