<script lang="ts">
	import type BaseLayer from "ol/layer/Base";
	import { getContext } from "svelte";

	import { olKey } from "./olKey";
	import type { MapContext } from "../../types/mapContext.type";

	const { getMap } = getContext<MapContext>(olKey);
	const map = getMap();

	export let layer: BaseLayer;

	map.addLayer(layer);
</script>
