import { TOOLS } from "../../types/tools.enum";
import { HOTKEYS } from "../../types/hotkeys.enum";

export const FOOTER_LABELS = {
	[TOOLS.MOVE]: [
		["Wheel Up", "for zoom in."],
		["Wheel Down", "for zoom out."],
		["Left Click Down", "to move."],
		["Right Click ⇾ Save As...", "to save the map as an image."]
	],
	[TOOLS.DRAW_LINE]: [
		["Left Click", "to add a point."],
		["Double Left Click", "to finish the line."],
		[
			`${HOTKEYS.DRAW_LINE.toUpperCase()}`,
			"to cancel current draw and reset tool."
		]
	],
	[TOOLS.FREE_DRAWING]: [
		["Left Click Down", "to draw."],
		[
			`${HOTKEYS.FREE_DRAWING.toUpperCase()}`,
			"to cancel current draw and reset tool."
		]
	]
};
