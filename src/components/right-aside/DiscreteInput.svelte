<script lang="ts">
	export let value: string;
	export let placeholder: string;

	function focusInput(e: MouseEvent) {
		e.stopPropagation();
		const input = (e.target as HTMLDivElement).firstChild as HTMLElement;
		input.focus();
	}
</script>

<div
	class="discrete-input"
	on:dblclick={focusInput}
	title="Double click to edit name"
>
	<input {placeholder} type="text" {value} />
</div>

<style lang="scss">
	.discrete-input {
		flex: 1;
		padding-left: 2px;
		padding-right: 5px;

		input {
			background-color: transparent;
			border: 0;
			color: var(--light);
			outline: none;
			pointer-events: none;
			width: 100%;
		}
	}
</style>
