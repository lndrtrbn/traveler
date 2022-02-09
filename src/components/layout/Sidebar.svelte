<script lang="ts">
	import hotkeys from "hotkeys-js";
	import { onMount } from "svelte";
	import { mdiGesture } from "@mdi/js";
	import { mdiCursorDefault } from "@mdi/js";
	import { mdiChartTimelineVariant } from "@mdi/js";

	import BtnIcon from "../BtnIcon.svelte";
	import { TOOLS } from "../../types/tools.enum";
	import { tool } from "../../stores/tool.store";
	import { HOTKEYS } from "../../types/hotkeys.enum";

	onMount(() => {
		hotkeys(HOTKEYS.MOVE, () => tool.set(TOOLS.MOVE));
		hotkeys(HOTKEYS.DRAW_LINE, () => tool.set(TOOLS.DRAW_LINE));
		hotkeys(HOTKEYS.FREE_DRAWING, () => tool.set(TOOLS.FREE_DRAWING));
	});
</script>

<div id="traveler-sidebar">
	<BtnIcon
		icon={mdiCursorDefault}
		title="Move [{HOTKEYS.MOVE.toUpperCase()}]"
		active={$tool == TOOLS.MOVE}
		on:click={() => tool.set(TOOLS.MOVE)}
	/>
	<BtnIcon
		icon={mdiChartTimelineVariant}
		title="Draw Line [{HOTKEYS.DRAW_LINE.toUpperCase()}]"
		active={$tool == TOOLS.DRAW_LINE}
		on:click={() => tool.set(TOOLS.DRAW_LINE)}
	/>
	<BtnIcon
		icon={mdiGesture}
		title="Free drawing [{HOTKEYS.FREE_DRAWING.toUpperCase()}]"
		active={$tool == TOOLS.FREE_DRAWING}
		on:click={() => tool.set(TOOLS.FREE_DRAWING)}
	/>
</div>

<style lang="scss">
	#traveler-sidebar {
		grid-area: 2 / 1 / 3 / 2;
		border-right: 1px solid var(--darkd);
		background: var(--darkl);
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: center;
		gap: 6px;
		padding: 6px;
	}
</style>
