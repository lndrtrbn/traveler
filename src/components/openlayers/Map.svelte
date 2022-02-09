<script lang="ts">
	import Map from "ol/Map";
	import View from "ol/View";
	import { fromLonLat } from "ol/proj";
	import { onMount, setContext } from "svelte";

	import { olKey } from "./olKey";
	import type { MapContext } from "../../types/mapContext.type";

	import "ol/ol.css";

	let map: Map;

	setContext<MapContext>(olKey, {
		getMap: () => map
	});

	onMount(() => {
		const bzhView = new View({
			center: fromLonLat([-2.49, 48.11]),
			zoom: 8
		});
		map = new Map({
			layers: [],
			controls: [],
			target: "ol-container",
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
