<script lang="ts">
	import type { Map } from "ol";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	import { olKey } from "../main/openlayers/olKey";

	let map = writable<Map>();
	setContext(olKey, map);
</script>

<div id="traveler-layout">
	<slot />
</div>

<style lang="scss">
	#traveler-layout {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		width: 100%;
		height: 100%;
	}
</style>
