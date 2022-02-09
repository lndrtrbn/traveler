<script lang="ts">
	import Map from "../openlayers/Map.svelte";
</script>

<div id="traveler-main">
	<Map />
</div>

<style lang="scss">
	#traveler-main {
		grid-area: 2 / 2 / 3 / 3;
		background: var(--dark);
	}
</style>
