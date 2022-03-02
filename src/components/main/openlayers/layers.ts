import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

export function createDrawLayer(name: string) {
	const source = new VectorSource({ wrapX: false });
	return new VectorLayer({
		source,
		properties: { name }
	});
}
