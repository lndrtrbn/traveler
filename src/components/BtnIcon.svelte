<script lang="ts">
	import Icon from "./Icon.svelte";

	export let icon: string;
	export let color = "var(--light)";
	export let size = 18;
	export let title = "";
	export let active = false;
</script>

<button
	class="btn-icon"
	class:active
	style="--size:{`${size + 10}px`}"
	on:click
>
	<Icon {icon} {color} {size} {title} />
</button>

<style lang="scss">
	.btn-icon {
		outline: none;
		background-color: transparent;
		position: relative;
		padding: 0;
		width: var(--size);
		height: var(--size);
		border: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 2px;
		border: 1px solid transparent;

		&:hover,
		&.active {
			background-color: var(--dark);
		}

		&.active {
			border-color: var(--darkd);
		}
	}
</style>
