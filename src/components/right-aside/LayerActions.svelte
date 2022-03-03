<script lang="ts">
	import { mdiDelete, mdiEye, mdiEyeOff } from "@mdi/js";

	import BtnIcon from "../ui/BtnIcon.svelte";

	import { tool } from "../../stores/tool.store";
	import { activeLayer, layers } from "../../stores/layer.store";
	import type { OLVectorLayer } from "../../types/openlayers.type";

	export let layer: OLVectorLayer;

	function deleteLayer(e: MouseEvent) {
		e.stopPropagation();
		if ($activeLayer === layer) {
			activeLayer.reset();
			tool.reset();
		}
		layers.remove(layer);
	}

	function toggleLayer(e: MouseEvent) {
		e.stopPropagation();
		layer.setVisible(!layer.getVisible());
		layers.redraw();
	}
</script>

<div class="layer-actions">
	<BtnIcon
		icon={layer.getVisible() ? mdiEye : mdiEyeOff}
		title="Toggle layer visibility"
		small
		on:click={toggleLayer}
	/>

	<BtnIcon
		icon={mdiDelete}
		title="Delete layer"
		small
		on:click={deleteLayer}
	/>
</div>

<style lang="scss">
	.layer-actions {
		display: flex;
		gap: 3px;
	}
</style>
