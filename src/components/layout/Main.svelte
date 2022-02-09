<script lang="ts">
	import OSM from "ol/source/OSM";
	import TileLayer from "ol/layer/Tile";

	import Map from "../openlayers/Map.svelte";
	import MapLayer from "../openlayers/MapLayer.svelte";
	import MapInteraction from "../openlayers/MapInteraction.svelte";

	const osmTile = new TileLayer({
		source: new OSM()
	});
</script>

<div id="traveler-main">
	<Map>
		<MapLayer layer={osmTile} />
		<MapInteraction />
	</Map>
</div>

<style lang="scss">
	#traveler-main {
		grid-area: 2 / 2 / 3 / 3;
		background: var(--dark);
	}
</style>
