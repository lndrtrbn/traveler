<script lang="ts">
	import { mdiPlus } from "@mdi/js";

	import Layer from "./Layer.svelte";
	import BtnIcon from "../ui/BtnIcon.svelte";

	import { createDrawLayer } from "../main/openlayers/layers";
	import { activeLayer, layers } from "../../stores/layer.store";

	function createLayer() {
		const layer = createDrawLayer(`Layer ${$layers.length + 1}`);
		layers.add(layer);
		activeLayer.set(layer);
	}
</script>

<div id="traveler-aside" class="bg-darkl bdl">
	<h3 class="header fw-400 fs-md bg bdb p-8">
		<span>Drawing Layers</span>
		<BtnIcon icon={mdiPlus} title="Add a layer" small on:click={createLayer} />
	</h3>

	<div class="layers">
		{#each $layers as layer}
			<Layer {layer} />
		{/each}
	</div>
</div>

<style lang="scss">
	#traveler-aside {
		grid-area: 2 / 3 / 3 / 4;
		width: 300px;

		.header {
			display: flex;
			align-items: center;

			span {
				flex: 1;
			}
		}
	}
</style>
