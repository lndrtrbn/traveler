import { writable } from "svelte/store";

import { TOOLS } from "../types/tools.enum";

function createTool() {
	const { subscribe, set, update } = writable(TOOLS.MOVE);

	function setTool(t: TOOLS) {
		update((tool) => (tool === t ? TOOLS.MOVE : t));
	}

	return {
		subscribe,
		set: setTool,
		reset: () => set(TOOLS.MOVE)
	};
}

export const tool = createTool();
