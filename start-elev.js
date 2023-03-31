var line = Geometry($feature);
//The geometry object of the feature.
var path = line.paths[0];
var pt = path[0];
return pt.z
