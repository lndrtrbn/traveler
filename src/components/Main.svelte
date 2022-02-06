<script lang="ts">
	import { onMount } from "svelte";
	import { fromLonLat } from "ol/proj";
	import Map from "ol/Map";
	import Colorize from "ol-ext/filter/Colorize";
	import OSM from "ol/source/OSM";
	import TileLayer from "ol/layer/Tile";
	import View from "ol/View";

	import "ol/ol.css";

	onMount(() => {
		const tileLayer = new TileLayer({
			source: new OSM()
		});
		tileLayer.addFilter(
			new Colorize({
				operation: "luminosity",
				value: 0.45
			})
		);
		tileLayer.addFilter(new Colorize({ operation: "contrast", value: 0 }));

		new Map({
			layers: [tileLayer],
			target: "traveler-main",
			controls: [],
			view: new View({
				center: fromLonLat([-2.49, 48.11]),
				zoom: 8
			})
		});
	});
</script>

<div id="traveler-main" />

<style lang="scss">
	#traveler-main {
		grid-area: 2 / 2 / 3 / 3;
		background: var(--dark);
	}
</style>
