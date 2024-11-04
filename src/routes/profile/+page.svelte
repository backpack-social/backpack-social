<script lang="ts">
	import { goto } from '$app/navigation';
	import { nostrPublicKey } from '$lib/stores';
	import { deleteLocalKeypair } from '$lib/utils';
</script>

<div class={`flex flex-col w-full gap-4 justify-start items-center`}>
	<p class={`font-sans font-[400] break-all`}>
		{`profile for ${$nostrPublicKey}`}
	</p>
	<button
		class={`button1`}
		on:click={async () => {
			await deleteLocalKeypair();
			await goto(`/`);
		}}
	>
		{`delete keys`}
	</button>
</div>
