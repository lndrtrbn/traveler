import Draw from "ol/interaction/Draw";
import type Geometry from "ol/geom/Geometry";
import type VectorSource from "ol/source/Vector";

import { TOOLS } from "../../../types/tools.enum";

export function createDrawFromTool(
	tool: TOOLS,
	source: VectorSource<Geometry>
): Draw {
	let draw: Draw;

	if (tool !== TOOLS.MOVE) {
		draw = new Draw({
			source,
			type: "LineString",
			freehand: tool === TOOLS.FREE_DRAWING
		});
	}

	return draw;
}
