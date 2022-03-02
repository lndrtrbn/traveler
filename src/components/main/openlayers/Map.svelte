<script lang="ts">
	import Map from "ol/Map";
	import View from "ol/View";
	import { fromLonLat } from "ol/proj";
	import { getContext, onMount } from "svelte";
	import type { Writable } from "svelte/store";

	import { olKey } from "./olKey";

	import "ol/ol.css";

	const map = getContext<Writable<Map>>(olKey);

	onMount(() => {
		const bzhView = new View({
			center: fromLonLat([-2.49, 48.11]),
			zoom: 8
		});
		$map = new Map({
			layers: [],
			controls: [],
			target: "ol-container",
			view: bzhView
		});
	});
</script>

<div id="ol-container">
	{#if $map}
		<slot />
	{/if}
</div>

<style>
	#ol-container {
		width: 100%;
		height: 100%;
	}
</style>
