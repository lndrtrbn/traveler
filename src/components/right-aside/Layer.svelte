<script lang="ts">
	import { mdiArrowRightBold, mdiArrowDownBold } from "@mdi/js";

	import Feature from "./Feature.svelte";
	import BtnIcon from "../ui/BtnIcon.svelte";
	import LayerActions from "./LayerActions.svelte";
	import DiscreteInput from "./DiscreteInput.svelte";

	import { activeLayer, layers } from "../../stores/layer.store";
	import type {
		OLFeature,
		OLVectorLayer
	} from "src/types/openlayers.type";

	export let layer: OLVectorLayer;
	let expanded = true;

	function setActive() {
		activeLayer.set(layer);
	}

	function toggleExpanded(e: MouseEvent) {
		e.stopPropagation();
		expanded = !expanded;
	}

	function removeFeature(feature: OLFeature) {
		layer.getSource().removeFeature(feature);
		layers.redraw();
	}
</script>

<div class="layer">
	<div class="bdb container">
		<button
			title="Set as active layer"
			class="active-button"
			class:active={$activeLayer === layer}
			on:click={setActive}
		/>

		<div class="layer-info p-8">
			<BtnIcon
				icon={expanded ? mdiArrowDownBold : mdiArrowRightBold}
				title="Toggle features list"
				small
				on:click={toggleExpanded}
			/>

			<DiscreteInput value={layer.get("name")} placeholder="(Layer)" />
			<LayerActions {layer} />
		</div>
	</div>

	{#if expanded}
		<div class="features">
			{#each layer.getSource().getFeatures() as feature}
				<Feature {feature} onDelete={removeFeature} />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
	}
	.active-button {
		width: 10px;
		background-color: var(--light);
		cursor: pointer;
		border: 0;
		padding: 0;

		&.active {
			background-color: var(--green);
		}
	}

	.layer-info {
		display: flex;
		align-items: center;
		flex: 1;
	}
</style>
