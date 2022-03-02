<script lang="ts">
	import { mdiTriangleOutline } from "@mdi/js";
	import Icon from "../ui/Icon.svelte";
</script>

<div class="logo">
	<Icon icon={mdiTriangleOutline} color="var(--green)" />
	<h1 class="fs-lg">Traveler</h1>
</div>

<style lang="scss">
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
</style>
