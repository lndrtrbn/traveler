<script lang="ts">
	import Map from "ol/Map";
	import View from "ol/View";
	import OSM from "ol/source/OSM";
	import TileLayer from "ol/layer/Tile";
	import { fromLonLat } from "ol/proj";
	import { onMount, setContext } from "svelte";

	import "ol/ol.css";

	let map: Map;

	const olKey = Symbol();
	setContext(olKey, {
		getMap: () => map
	});

	onMount(() => {
		const osmTile = new TileLayer({
			source: new OSM()
		});
		const bzhView = new View({
			center: fromLonLat([-2.49, 48.11]),
			zoom: 8
		});

		new Map({
			layers: [osmTile],
			target: "ol-container",
			controls: [],
			view: bzhView
		});
	});
</script>

<div id="ol-container">
	{#if map}
		<slot />
	{/if}
</div>

<style>
	#ol-container {
		width: 100%;
		height: 100%;
	}
</style>
