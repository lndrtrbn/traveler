<script lang="ts">
	import type { MenuItemType } from "src/types/MenuItem.type";
	import { ITEMS } from "./items";
	import MenuItem from "./MenuItem.svelte";

	let items: MenuItemType[] = ITEMS;
	let openItem: MenuItemType;

	function setItem(item: MenuItemType) {
		openItem = openItem == item ? undefined : item;
	}

	function resetItem(item) {
		if (openItem == item) {
			openItem = undefined;
		}
	}
</script>

<ul class="menu">
	{#each items as item}
		<MenuItem
			{item}
			opened={openItem == item}
			on:click={() => setItem(item)}
			on:click_outside={() => resetItem(item)}
		/>
	{/each}
</ul>

<style lang="scss">
	.menu {
		padding-left: 5px;
		display: flex;
		align-items: stretch;
	}
</style>
