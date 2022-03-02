import type Feature from "ol/Feature";
import type Geometry from "ol/geom/Geometry";
import type VectorLayer from "ol/layer/Vector";
import type VectorSource from "ol/source/Vector";

export type OLVectorLayer = VectorLayer<VectorSource<Geometry>>;
export type OLFeature = Feature<Geometry>;
