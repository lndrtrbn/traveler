<script lang="ts">
	import { mdiTriangleOutline } from "@mdi/js";
	import Icon from "./Icon.svelte";
</script>

<div id="traveler-header">
	<div class="logo">
		<Icon icon={mdiTriangleOutline} color="var(--green)" title="test" />
		<h1>Traveler</h1>
	</div>
</div>

<style lang="scss">
	#traveler-header {
		display: flex;
		grid-area: 1 / 1 / 2 / 4;
		background: var(--dark);
		padding: 8px 10px;
		border-bottom: 1px solid var(--darkd);

		.logo {
			display: flex;
			align-items: center;
		}

		h1 {
			font-size: 1.3em;
			padding-left: 5px;
			line-height: 23px;
			letter-spacing: 1px;
		}
	}
</style>
