<script lang="ts">
	import type BaseLayer from "ol/layer/Base";
	import type { Map } from "ol";
	import type { Writable } from "svelte/store";
	import { getContext, onDestroy } from "svelte";

	import { olKey } from "./olKey";

	const map = getContext<Writable<Map>>(olKey);

	export let layer: BaseLayer;

	$map.addLayer(layer);

	onDestroy(() => {
		$map.removeLayer(layer);
	});
</script>
