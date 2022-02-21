<script lang="ts">
	import { mdiTriangleOutline } from "@mdi/js";

	import Icon from "../Icon.svelte";
	import Menu from "../menu/Menu.svelte";
</script>

<div id="traveler-header" class="bg bdb">
	<div class="logo">
		<Icon icon={mdiTriangleOutline} color="var(--green)" />
		<h1 class="fs-lg">Traveler</h1>
	</div>

	<Menu />
</div>

<style lang="scss">
	#traveler-header {
		display: flex;
		grid-area: 1 / 1 / 2 / 4;

		.logo {
			display: flex;
			align-items: center;
			padding: 5px 8px;
		}

		h1 {
			padding-left: 10px;
			line-height: 24px;
			letter-spacing: 1px;
		}
	}
</style>
