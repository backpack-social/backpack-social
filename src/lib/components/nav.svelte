<script lang="ts">
	import { t } from '$lib/locales';
</script>

<nav
	class={`absolute top-0 left-0 flex flex-row h-16 w-full px-8 justify-between items-center bg-white/10 backdrop-blur-md`}
>
	<a href={`/`}>
		<div class={`flex flex-row gap-4 justify-start items-center`}>
			<img class={`h-12 w-12`} src={`/logo.png`} alt={`logo`} />
			<p class={`font-sc font-[700] text-4xl text-white lowercase`}>
				{`${$t(`common.app_name`)}`}
			</p>
		</div>
	</a>
</nav>
