<script lang="ts">
	import VectorLayer from "ol/layer/Vector";
	import VectorSource from "ol/source/Vector";
	import type Draw from "ol/interaction/Draw";
	import { getContext } from "svelte";

	import { olKey } from "./olKey";
	import { drawFromTool } from "./interaction";
	import { tool } from "../../stores/tool.store";
	import type { MapContext } from "../../types/mapContext.type";

	const { getMap } = getContext<MapContext>(olKey);
	const map = getMap();

	const source = new VectorSource({ wrapX: false });
	const vector = new VectorLayer({ source });

	let draw: Draw;

	map.addLayer(vector);

	tool.subscribe((val) => {
		if (draw) {
			map.removeInteraction(draw);
		}
		draw = drawFromTool(val, source);
		if (draw) {
			map.addInteraction(draw);
		}
	});
</script>
