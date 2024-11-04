<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import { t } from '$lib/locales';
	import '../app.css';
</script>

<svelte:head>
	<title>{`${`${$t(`common.app_title`)}`} - ${`${$t(`common.app_name`)}`}`}</title>
</svelte:head>

<div
	class="relative flex flex-col h-[100vh] w-full justify-start items-center bg-gradient-to-br from-tiffany_blue via-powder_blue to-purple_pizzazz/50"
>
	<Nav />
	<div
		class={`flex flex-col h-full w-full pt-16 justify-start items-center bg-repeat heropattern-bubbles-gray-50/50`}
	>
		<slot />
	</div>
</div>
