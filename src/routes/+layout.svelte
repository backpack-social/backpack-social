<script lang="ts">
	import { t } from '$lib/locales';
	import '../app.css';
</script>

<svelte:head>
	<title>{`${`${$t(`common.app_title`)}`} - ${`${$t(`common.app_name`)}`}`}</title>
</svelte:head>

<slot />
