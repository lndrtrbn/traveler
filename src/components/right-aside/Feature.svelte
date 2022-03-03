<script lang="ts">
	import Style from "ol/style/Style";

	import { mdiDelete, mdiEye, mdiEyeOff } from "@mdi/js";

	import BtnIcon from "../ui/BtnIcon.svelte";
	import DiscreteInput from "./DiscreteInput.svelte";

	import type { OLFeature } from "src/types/openlayers.type";

	export let feature: OLFeature;
	export let onDelete: (f: OLFeature) => void;

	let visible = true;

	function toggleFeature(e: MouseEvent) {
		e.stopPropagation();
		feature.setStyle(visible ? new Style({}) : null);
		visible = !visible;
	}

	function removeFeature(e: MouseEvent) {
		e.stopPropagation();
		onDelete(feature);
	}
</script>

<div class="feature bdb p">
	<DiscreteInput value={feature.get("name")} placeholder="(Feature)" />

	<div class="actions">
		<BtnIcon
			icon={visible ? mdiEye : mdiEyeOff}
			title="Toggle feature visibility"
			small
			color="var(--lightd)"
			on:click={toggleFeature}
		/>
		<BtnIcon
			icon={mdiDelete}
			title="Remove feature"
			small
			color="var(--lightd)"
			on:click={removeFeature}
		/>
	</div>
</div>

<style lang="scss">
	.feature {
		background-color: var(--dark);
		padding-left: 20px;
		display: flex;

		p {
			flex: 1;
		}

		.actions {
			display: flex;
		}
	}
</style>
