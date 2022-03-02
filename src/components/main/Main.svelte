<script lang="ts">
	import OSM from "ol/source/OSM";
	import TileLayer from "ol/layer/Tile";

	import Map from "./openlayers/Map.svelte";
	import MapLayer from "./openlayers/MapLayer.svelte";
	import MapInteraction from "./openlayers/MapInteraction.svelte";

	import { layers } from "../../stores/layer.store";

	const osmTile = new TileLayer({
		source: new OSM()
	});
</script>

<div id="traveler-main" class="bg">
	<Map>
		<MapLayer layer={osmTile} />
		{#each $layers as layer (layer.get("name"))}
			<MapLayer {layer} />
		{/each}

		<MapInteraction />
	</Map>
</div>

<style lang="scss">
	#traveler-main {
		grid-area: 2 / 2 / 3 / 3;
	}
</style>
