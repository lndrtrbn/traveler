import { writable } from "svelte/store";

import { TOOLS } from "../types/tools.enum";

function createTool() {
	const { subscribe, set, update } = writable(TOOLS.MOVE);

	return {
		subscribe,
		set: (t: TOOLS) => update((tool) => (tool === t ? TOOLS.MOVE : t)),
		reset: () => set(TOOLS.MOVE)
	};
}

export const tool = createTool();
