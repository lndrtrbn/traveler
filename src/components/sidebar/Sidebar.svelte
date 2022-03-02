<script lang="ts">
	import hotkeys from "hotkeys-js";

	import { onMount } from "svelte";
	import { mdiGesture } from "@mdi/js";
	import { mdiCursorDefault } from "@mdi/js";
	import { mdiChartTimelineVariant } from "@mdi/js";

	import BtnIcon from "../ui/BtnIcon.svelte";

	import { TOOLS } from "../../types/tools.enum";
	import { tool } from "../../stores/tool.store";
	import { HOTKEYS } from "../../types/hotkeys.enum";
	import { createDrawLayer } from "../main/openlayers/layers";
	import { activeLayer, layers } from "../../stores/layer.store";

	onMount(() => {
		hotkeys(HOTKEYS.MOVE, () => setTool(TOOLS.MOVE));
		hotkeys(HOTKEYS.DRAW_LINE, () => setTool(TOOLS.DRAW_LINE));
		hotkeys(HOTKEYS.FREE_DRAWING, () => setTool(TOOLS.FREE_DRAWING));
	});

	function setTool(t: TOOLS) {
		tool.set(t);
		if ($activeLayer === undefined) {
			if ($layers.length > 0) {
				activeLayer.set($layers[0]);
			} else {
				const layer = createDrawLayer("Layer 1");
				layers.add(layer);
				activeLayer.set(layer);
			}
		}
	}
</script>

<div id="traveler-sidebar" class="bdr bg-darkl">
	<BtnIcon
		icon={mdiCursorDefault}
		title="Move [{HOTKEYS.MOVE.toUpperCase()}]"
		active={$tool == TOOLS.MOVE}
		on:click={() => setTool(TOOLS.MOVE)}
	/>
	<BtnIcon
		icon={mdiChartTimelineVariant}
		title="Draw Line [{HOTKEYS.DRAW_LINE.toUpperCase()}]"
		active={$tool == TOOLS.DRAW_LINE}
		on:click={() => setTool(TOOLS.DRAW_LINE)}
	/>
	<BtnIcon
		icon={mdiGesture}
		title="Free drawing [{HOTKEYS.FREE_DRAWING.toUpperCase()}]"
		active={$tool == TOOLS.FREE_DRAWING}
		on:click={() => setTool(TOOLS.FREE_DRAWING)}
	/>
</div>

<style lang="scss">
	#traveler-sidebar {
		grid-area: 2 / 1 / 3 / 2;
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: center;
		gap: 6px;
		padding: 6px;
	}
</style>
