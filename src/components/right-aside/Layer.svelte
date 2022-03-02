<script lang="ts">
	import { mdiDelete } from "@mdi/js";

	import BtnIcon from "../ui/BtnIcon.svelte";

	import { tool } from "../../stores/tool.store";
	import { activeLayer, layers } from "../../stores/layer.store";
	import type { OLFeature, OLVectorLayer } from "src/types/openlayers.type";

	export let layer: OLVectorLayer;

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

	function removeFeature(e: MouseEvent, feature: OLFeature) {
		e.stopPropagation();
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
	<div class="features">
		{#each layer.getSource().getFeatures() as feature}
			<div class="feature bdb p">
				<p>{feature.get("name")}</p>

				<div class="actions">
					<BtnIcon
						icon={mdiDelete}
						title="Remove feature"
						small
						color="var(--lightd)"
						on:click={(e) => removeFeature(e, feature)}
					/>
				</div>
			</div>
		{/each}
	</div>
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
		}
	}

	.feature {
		background-color: var(--dark);
		padding-left: 15px;
		display: flex;

		p {
			flex: 1;
		}
	}
</style>
