<script lang="ts">
	import {
		mdiDelete,
		mdiEye,
		mdiEyeOff,
		mdiArrowRightBold,
		mdiArrowDownBold
	} from "@mdi/js";

	import BtnIcon from "../ui/BtnIcon.svelte";

	import Feature from "./Feature.svelte";

	import { tool } from "../../stores/tool.store";
	import { activeLayer, layers } from "../../stores/layer.store";
	import type { OLFeature, OLVectorLayer } from "src/types/openlayers.type";

	export let layer: OLVectorLayer;

	let expanded = true;

	function setActive() {
		activeLayer.set(layer);
	}

	function removeLayer(e: MouseEvent) {
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
	<div class="bdb">
		<div
			class="layer-info p-8"
			class:active={$activeLayer === layer}
			class:light={$activeLayer === layer}
			on:click={setActive}
		>
			<BtnIcon
				icon={expanded ? mdiArrowDownBold : mdiArrowRightBold}
				title="Toggle features list"
				small
				on:click={toggleExpanded}
			/>

			<p class="fw-500">{layer.get("name")}</p>

			<div class="actions">
				<BtnIcon
					icon={layer.getVisible() ? mdiEye : mdiEyeOff}
					title="Toggle layer visibility"
					small
					on:click={toggleLayer}
				/>

				<BtnIcon
					icon={mdiDelete}
					title="Remove layer"
					small
					on:click={removeLayer}
				/>
			</div>
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
	.layer-info {
		display: flex;
		border-left: 5px solid var(--light);
		cursor: pointer;

		&.active {
			border-left-color: var(--green);
		}

		p {
			flex: 1;
			padding-left: 5px;
		}

		.actions {
			display: flex;
		}
	}
</style>
