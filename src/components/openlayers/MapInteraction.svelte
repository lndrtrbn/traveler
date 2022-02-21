<script lang="ts">
	import type Draw from "ol/interaction/Draw";
	import type Geometry from "ol/geom/Geometry";
	import type VectorLayer from "ol/layer/Vector";
	import type VectorSource from "ol/source/Vector";
	import type { Map } from "ol";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	import { olKey } from "./olKey";
	import { tool } from "../../stores/tool.store";
	import { createDrawFromTool } from "./interaction";
	import { activeLayer } from "../../stores/layer.store";

	const map = getContext<Writable<Map>>(olKey);

	let draw: Draw;

	$: {
		if (draw) {
			$map.removeInteraction(draw);
		}
		const layer = $activeLayer as VectorLayer<VectorSource<Geometry>>;
		if (layer) {
			draw = createDrawFromTool($tool, layer.getSource());
			if (draw) {
				$map.addInteraction(draw);
			}
		}
	}
</script>
