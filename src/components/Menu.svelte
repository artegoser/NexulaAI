<script lang="ts">
	import { AppBar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { Icon, ArrowUp, ChatBubbleOvalLeft, DocumentText, Cog6Tooth } from 'svelte-hero-icons';
	export let tab: string;
	export let title: string;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
			<RadioItem bind:group={tab} name="justify" class="flex" value="chat">
				<Icon src={ChatBubbleOvalLeft} class="w-6 h-6 pr-1" />
				Chat
			</RadioItem>
			<RadioItem bind:group={tab} name="justify" class="flex" value="prompt">
				<Icon src={DocumentText} class="w-6 h-6 pr-1" />
				Prompt
			</RadioItem>
		</RadioGroup></svelte:fragment
	>
	NexulaAI - {`${title} ${tab}`}
	<svelte:fragment slot="trail" />
</AppBar>
