<script lang="ts">
	import { goto } from '$app/navigation';
	import { t } from '$lib/locales';
	import { nostrPublicKey } from '$lib/stores';
	import { createLocalKeypair } from '$lib/utils';
</script>

<nav
	class={`absolute top-0 left-0 flex flex-row max-lg:h-20 h-16 w-full max-lg:px-4 px-8 justify-between items-center bg-white/10 backdrop-blur-md`}
>
	<a href={`/`}>
		<div class={`flex flex-row gap-4 justify-start items-center`}>
			<img class={`h-12 w-12`} src={`/logo.png`} alt={`logo`} />
			<p class={`font-sc font-[700] text-4xl text-white lowercase`}>
				{`${$t(`common.app_name`)}`}
			</p>
		</div>
	</a>
	<div class={`flex flex-row justify-start items-center`}>
		{#if $nostrPublicKey}
			<button
				class={`button1 capitalize`}
				on:click={async () => {
					await goto(`/profile`);
				}}
			>
				{`${$t(`common.view_profile`)}`}
			</button>
		{:else}
			<button
				class={`button1`}
				on:click={async () => {
					await createLocalKeypair();
				}}
			>
				{`create keys`}
			</button>
		{/if}
	</div>
</nav>
