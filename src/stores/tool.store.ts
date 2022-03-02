import { writable } from "svelte/store";

import { TOOLS } from "../types/tools.enum";

/**
 * Builder of the store: tool.
 *
 * @returns An object to subscribe to writable and the API to update it.
 */
function createTool() {
	const { subscribe, set, update } = writable(TOOLS.MOVE);

	/**
	 * Set the active tool.
	 *
	 * @param t The tool to set as active.
	 */
	function setTool(t: TOOLS) {
		update((tool) => (tool === t ? TOOLS.MOVE : t));
	}

	/**
	 * Active thde default tool wich is the move tool.
	 */
	function reset() {
		set(TOOLS.MOVE);
	}

	return {
		subscribe,
		set: setTool,
		reset
	};
}

export const tool = createTool();
