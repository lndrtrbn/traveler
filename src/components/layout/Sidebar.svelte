<script lang="ts">
	import { mdiCursorDefault } from "@mdi/js";
	import { mdiChartTimelineVariant } from "@mdi/js";

	import BtnIcon from "../BtnIcon.svelte";
	import { TOOLS } from "../../utils/tools.enum";

	let tool = TOOLS.MOVE;

	function setTool(newTool: TOOLS) {
		tool = newTool;
	}
</script>

<div id="traveler-sidebar">
	<BtnIcon
		icon={mdiCursorDefault}
		title="Move [M]"
		active={tool == TOOLS.MOVE}
		on:click={() => setTool(TOOLS.MOVE)}
	/>
	<BtnIcon
		icon={mdiChartTimelineVariant}
		title="Draw Line [L]"
		active={tool == TOOLS.DRAW_LINE}
		on:click={() => setTool(TOOLS.DRAW_LINE)}
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
