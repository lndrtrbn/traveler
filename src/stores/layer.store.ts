import type BaseLayer from "ol/layer/Base";
import { writable } from "svelte/store";

function createLayers() {
	const { subscribe, update } = writable<BaseLayer[]>([]);

	function add(layer: BaseLayer) {
		update((layers) => [...layers, layer]);
	}

	function remove(layer: BaseLayer) {
		update((layers) => layers.filter((l) => l !== layer));
	}

	return {
		subscribe,
		add,
		remove
	};
}

function createActiveLayer() {
	const { subscribe, set } = writable<BaseLayer>();

	return {
		subscribe,
		set,
		reset: () => set(undefined)
	};
}

export const layers = createLayers();
export const activeLayer = createActiveLayer();
