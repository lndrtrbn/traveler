<script lang="ts">
	import { tool } from "../../stores/tool.store";
	import { FOOTER_LABELS } from "./footerLabels";
</script>

<div id="traveler-footer" class="bdt bg fs-sm p">
	<div class="content">
		{#each FOOTER_LABELS[$tool] as [action, info]}
			<span class="colored fw-500">{action}</span> {info}
		{/each}
	</div>
	<span class="author">Coded by Landry Trebon</span>
</div>

<style lang="scss">
	#traveler-footer {
		grid-area: 3 / 1 / 4 / 4;
		display: flex;

		.content {
			flex: 1;
			span:not(:first-child) {
				margin-left: 5px;
			}
		}
	}
</style>
