<script lang="ts">
	import type BaseLayer from "ol/layer/Base";
	import { mdiDelete } from "@mdi/js";

	import BtnIcon from "./BtnIcon.svelte";
	import { tool } from "../stores/tool.store";
	import { activeLayer, layers } from "../stores/layer.store";

	export let layer: BaseLayer;

	function setActive() {
		activeLayer.set(layer);
	}

	function removeLayer(e: MouseEvent) {
		e.stopPropagation();
		layers.remove(layer);
		if ($activeLayer === layer) {
			activeLayer.reset();
			tool.reset();
		}
	}
</script>

<div class="layer bdb">
	<div
		class="container p-8"
		class:active={$activeLayer === layer}
		class:light={$activeLayer === layer}
		on:click={setActive}
	>
		<p class="fw-500">{layer.get("name")}</p>

		<div class="actions">
			<BtnIcon
				icon={mdiDelete}
				title="Remove layer"
				small
				on:click={removeLayer}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		border-left: 5px solid var(--light);
		cursor: pointer;
		display: flex;

		p {
			flex: 1;
		}

		&.active {
			border-color: var(--green);
		}
	}
</style>
