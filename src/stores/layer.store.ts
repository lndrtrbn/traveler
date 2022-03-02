import { writable } from "svelte/store";

import type { OLVectorLayer } from "src/types/openlayers.type";

/**
 * Builder of the store: layers.
 *
 * @returns An object to subscribe to writable and the API to update it.
 */
function createLayers() {
	const { subscribe, update } = writable<OLVectorLayer[]>([]);

	/**
	 * Add a new layer in the array of layers.
	 *
	 * @param layer The layer to add.
	 */
	function add(layer: OLVectorLayer) {
		if (layer) {
			update((layers) => [...layers, layer]);
		}
	}

	/**
	 * Remove a layer from the array of layers.
	 *
	 * @param layer The layer to remove.
	 */
	function remove(layer: OLVectorLayer) {
		if (layer) {
			update((layers) => layers.filter((l) => l !== layer));
		}
	}

	/**
	 * Recreate the array of layers without modifying the content.
	 * It is used to trigger a change detection.
	 */
	function redraw() {
		update((layers) => [...layers]);
	}

	return {
		subscribe,
		add,
		remove,
		redraw
	};
}

/**
 * Builder of the store: activeLayer.
 *
 * @returns An object to subscribe to writable and the API to update it.
 */
function createActiveLayer() {
	const { subscribe, set } = writable<OLVectorLayer>();

	function reset() {
		set(undefined);
	}

	return {
		subscribe,
		set,
		reset
	};
}

export const layers = createLayers();
export const activeLayer = createActiveLayer();
