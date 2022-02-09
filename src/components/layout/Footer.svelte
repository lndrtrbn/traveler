<script lang="ts">
	import { tool } from "../../stores/tool.store";
	import { FOOTER_LABELS } from "./footerLabels";
</script>

<div id="traveler-footer">
	<div class="content">
		{#each FOOTER_LABELS[$tool] as [action, info]}
			<span>{action}</span> {info}
		{/each}
	</div>
	<span class="author">Coded by Landry Trebon</span>
</div>

<style lang="scss">
	#traveler-footer {
		grid-area: 3 / 1 / 4 / 4;
		background: var(--dark);
		padding: 3px 10px;
		border-top: 1px solid var(--darkd);
		display: flex;
		align-items: center;
		font-size: 0.9em;

		.content {
			flex: 1;

			span {
				color: var(--green);
				font-weight: 500;

				&:not(:first-child) {
					margin-left: 5px;
				}
			}
		}
	}
</style>
