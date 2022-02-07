<script lang="ts">
	export let icon: string;
	export let color = "var(--light)";
	export let size = 24;
	export let title = "";
</script>

<i class="icon" style="--size:{`${size}px`}" {title}>
	<svg class="icon" viewBox="0 0 24 24" fill={color}>
		<path d={icon} />
	</svg>
</i>

<style lang="scss">
	.icon {
		display: inline-block;
		width: var(--size);
		height: var(--size);
	}
</style>
