<script lang="ts">
	import Icon from "./Icon.svelte";

	export let icon: string;
	export let color = "var(--light)";
	export let size = 18;
	export let title = "";
	export let active = false;
	export let small = false;
</script>

<button
	class="btn-icon"
	class:active
	class:small
	style="--size:{`${small ? size : size + 10}px`}"
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

		&.active {
			background-color: var(--dark);
			border-color: var(--darkd);
		}
	}
</style>
