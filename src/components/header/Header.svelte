<script lang="ts">
	import Logo from "./Logo.svelte";
	import Menu from "./menu/Menu.svelte";
</script>

<div id="traveler-header" class="bg bdb">
	<Logo />
	<Menu />
</div>

<style lang="scss">
	#traveler-header {
		display: flex;
		grid-area: 1 / 1 / 2 / 4;
	}
</style>
